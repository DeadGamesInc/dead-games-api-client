import { resolve } from 'path'
import { matchersWithOptions } from 'jest-json-schema'
import * as TJS from 'typescript-json-schema'

import DeadGamesHTTPClient from './http'
import { ChainId, Nft, Nft1155DTO, NftDTO, NftPreviewDTO } from '../model'
import { Wallet, WalletDTO } from "../model/wallet";
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
const wertSandbox = new DeadGamesHTTPClient({ chainId: ChainId.MaticTestnet })
const wertProduction = new DeadGamesHTTPClient({ chainId: ChainId.Matic })
const deployer: Address = "0xB8C1FFF8b915232067c1e7449870e397E43B143b"

const assertValidWallet = (wallet: Wallet) =>
  expect(wallet).toMatchSchema(schemaProvider.getSchemaForSymbol('Wallet'))

const assertValidWalletDTO = (wallet: WalletDTO) =>
  expect(wallet).toMatchSchema(schemaProvider.getSchemaForSymbol('WalletDTO'))

const assertValidNftPreviewDTO = (wallet: NftPreviewDTO) =>
  expect(wallet).toMatchSchema(schemaProvider.getSchemaForSymbol('NftPreviewDTO'))

const assertValidWallets = (wallets: Wallet[]) => {
  expect(wallets).not.toBeUndefined()
  expect(wallets.length).toBeGreaterThan(0)
  wallets.forEach((wallet) => assertValidWallet(wallet))
}

const assertValidNft = (nft: Nft) =>
  expect(nft).toMatchSchema(schemaProvider.getSchemaForSymbol('Nft'))

const assertValidNftDTO = (nft: NftDTO) =>
  expect(nft).toMatchSchema(schemaProvider.getSchemaForSymbol('NftDTO'))

const assertValidNft1155DTO = (nft: Nft1155DTO) =>
  expect(nft).toMatchSchema(schemaProvider.getSchemaForSymbol('Nft1155DTO'))

describe('Wallet APIs', () => {
  it('getTotalWallets', async () => {
    const totalWallets = await client.getTotalWallets()
    expect(totalWallets).toBeGreaterThan(0)
  })

  // it('getWallets', async () => {
  //   const wallets = await client.getWallets()
  //   assertValidWallets(wallets)
  // })

  it('getWallet', async () => {
    const wallet = await client.getWallet(deployer)
    assertValidWalletDTO(wallet)
  })

  it('getWalletNftPreviews', async () => {
    const nfts = await client.getWalletNftPreviews(deployer)
    nfts.forEach(nft => assertValidNftPreviewDTO(nft))
  })

  it('getOwnedNftPreviews', async () => {
    const nfts = await client.getOwnedNftPreviews(deployer)
    nfts.forEach(nft => assertValidNftPreviewDTO(nft))
  })

  it('getOwnedNfts1155', async () => {
    const nfts = await client.getOwnedNfts1155(deployer)
    nfts.forEach(nft => assertValidNft1155DTO(nft))
  })

  it('refreshNftAndGetWalletTokens', async () => {
    const tokens = await client.refreshWalletNft(deployer, "0xd88931E3406Ec654326153a26dCcE368b324Fe69")
    expect(tokens.length).toBeGreaterThan(0)
  })
})

describe('NFT APIs', () => {
  it('getNft', async () => {
    const nft = await client.getNft('0x6209E17d98ba2089571476940751802AAc4249e8')
    assertValidNftDTO(nft)
  })

  // it('getNfts', async () => {
  //   const nfts = await client.getNfts()
  //   nfts.forEach((nft) => assertValidNft(nft))
  // })
})

describe('Wert API', () => {
  it('sandbox requestSignature ', async () => {
    const signedData = await wertSandbox.requestSignature({
      address: "account",
      commodity: "MATIC",
      commodity_amount: 10,
      pk_id: "config.pk_id",
      sc_address: "0xB9e43509dBa3aE5c7307dC887C5771744E5a4dC3",
      sc_input_data: "scInputData",
    })

    expect(signedData).toMatchSchema(schemaProvider.getSchemaForSymbol('SignatureResponse'))
  });

  it('production requestSignature ', async () => {
    const signedData = await wertProduction.requestSignature({
      address: "account",
      commodity: "MATIC",
      commodity_amount: 10,
      pk_id: "config.pk_id",
      sc_address: "0xB9e43509dBa3aE5c7307dC887C5771744E5a4dC3",
      sc_input_data: "scInputData",
    })

    expect(signedData).toMatchSchema(schemaProvider.getSchemaForSymbol('SignatureResponse'))
  });
})