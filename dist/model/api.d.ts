import { Nft, NftDTO } from './nft';
import { Wallet, WalletDTO } from "./wallet";
import { SignatureResponse, SignableData } from "./wert";
export interface DeadGamesWalletApi {
    getTotalWallets: () => Promise<number>;
    getWallets: () => Promise<Wallet[]>;
    getWallet: (walletAddress: string) => Promise<WalletDTO>;
    refreshWalletNft: (walletAddress: string, nftAddress: string) => Promise<number[]>;
}
export interface DeadGamesNftApi {
    getNfts: () => Promise<Nft[]>;
    getNft: (address: string) => Promise<NftDTO>;
}
export interface WertPartnerApi {
    requestSignature: (unsignedData: SignableData) => Promise<SignatureResponse>;
}
export default interface DeadGamesApi extends DeadGamesWalletApi, DeadGamesNftApi, WertPartnerApi {
}
