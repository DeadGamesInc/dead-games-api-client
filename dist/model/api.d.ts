import { Nft, Nft1155DTO, NftDTO, NftPreviewDTO } from './nft';
import { Wallet, WalletDTO } from "./wallet";
import { SignatureResponse, SignableData } from "./wert";
export interface DeadGamesWalletApi {
    getTotalWallets: () => Promise<number>;
    getWallets: () => Promise<Wallet[]>;
    getWallet: (walletAddress: string) => Promise<WalletDTO>;
    getWalletNftPreviews: (walletAddress: string) => Promise<NftPreviewDTO[]>;
    refreshWalletNft: (walletAddress: string, nftAddress: string) => Promise<number[]>;
    getOwnedNftPreviews: (walletAddress: string) => Promise<NftPreviewDTO[]>;
    getOwnedNfts1155: (walletAddress: string) => Promise<Nft1155DTO[]>;
}
export interface DeadGamesNftApi {
    getNfts: () => Promise<Nft[]>;
    getNft: (address: string) => Promise<NftDTO>;
    getNftPreviews: () => Promise<NftPreviewDTO[]>;
    getNftPreviewsByAddress: (addresses: string[]) => Promise<NftPreviewDTO[]>;
    getNfts1155: () => Promise<Nft1155DTO[]>;
}
export interface WertPartnerApi {
    requestSignature: (unsignedData: SignableData) => Promise<SignatureResponse>;
}
export default interface DeadGamesApi extends DeadGamesWalletApi, DeadGamesNftApi, WertPartnerApi {
}
