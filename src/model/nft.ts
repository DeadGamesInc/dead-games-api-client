import { Address } from './common'
import { NftToken, NftTokenDTO } from "./nftToken";

export interface Nft {
  address: Address
  name: string
  symbol: string
  lastUpdate: number
  nftTokens: NftToken[]
}

export interface NftDTO extends Omit<Nft, 'nftTokens'> {
  nftTokens: NftTokenDTO[]
}
