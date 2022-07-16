import { resolve } from 'path'
import { matchersWithOptions } from 'jest-json-schema'
import * as TJS from 'typescript-json-schema'

import DeadGamesHTTPClient from './http'
import { ChainId, Nft } from '../model'
import { Wallet } from "../model/wallet";
import { Address } from "../model/common";

expect.extend(
  matchersWithOptions({
    verbose: true,
  }),
)

// Generate json type schema for Typescript interfaces
const tjsProgram = TJS.getProgramFromFiles([resolve('src/model/index.ts')], { strictNullChecks: true })

const schemaProvider = TJS.buildGenerator(tjsProgram, {
  required: true,
})
if(!schemaProvider) {
  throw new TypeError('Null schema generator')
}

const client = new DeadGamesHTTPClient({ chainId: ChainId.BSC })
const deployer: Address = "0xB8C1FFF8b915232067c1e7449870e397E43B143b"

const assertValidWallet = (wallet: Wallet) =>
  expect(wallet).toMatchSchema(schemaProvider.getSchemaForSymbol('Wallet'))
const assertValidWallets = (wallets: Wallet[]) => {
  expect(wallets).not.toBeUndefined()
  expect(wallets.length).toBeGreaterThan(0)
  wallets.forEach((listing) => assertValidWallet(listing))
}
const assertValidNft = (nft: Nft) =>
  expect(nft).toMatchSchema(schemaProvider.getSchemaForSymbol('Nft'))

describe('Wallet APIs', () => {
  it('getTotalWallets', async () => {
    const totalWallets = await client.getTotalWallets()
    expect(totalWallets).toBeGreaterThan(0)
  })

  it('getWallets', async () => {
    const wallets = await client.getWallets()
    assertValidWallets(wallets)
  })

  it('getWallet', async () => {
    const wallet = await client.getWallet(deployer)
    assertValidWallet(wallet)
  })

  it('refreshNftAndGetWalletTokens', async () => {
    const tokens = await client.refreshWalletNft(deployer, "0xd88931E3406Ec654326153a26dCcE368b324Fe69")
    expect(tokens.length).toBeGreaterThan(0)
  })
})

describe('NFT APIs', () => {
  it('getNft', async () => {
    const nft = await client.getNft('0x6209E17d98ba2089571476940751802AAc4249e8')
    assertValidNft(nft)
  })

  it('getNfts', async () => {
    const nfts = await client.getNfts()
    nfts.forEach((nft) => assertValidNft(nft))
  })
})