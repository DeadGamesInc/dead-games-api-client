import { Nft } from './nft'
import { Wallet } from "./wallet";

export interface DeadGamesWalletApi {
  getTotalWallets: () => Promise<number>
  getWallets: () => Promise<Wallet[]>
  getWallet: (walletAddress: string) => Promise<Wallet>
}

export interface DeadGamesNftApi {
  getNfts: () => Promise<Nft[]>
  getNft: (address: string) => Promise<Nft>
}

export default interface DeadGamesApi
  extends DeadGamesWalletApi,
    DeadGamesNftApi
    {}
