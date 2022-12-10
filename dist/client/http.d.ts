import DeadGamesApi from '../model/api';
import { Nft, Nft1155DTO, NftDTO, NftPreviewDTO } from '../model';
import { DeadGamesClientConfig } from './types';
import { Held1155NftTokenDTO, Wallet, WalletDTO } from "../model/wallet";
import { SignableData, SignatureResponse } from "../model/wert";
export default class DeadGamesHTTPClient implements DeadGamesApi {
    private readonly http;
    private readonly httpWert;
    constructor(config?: DeadGamesClientConfig);
    private callPluralApi;
    getNfts: () => Promise<Nft[]>;
    getNft: (address: string) => Promise<NftDTO>;
    indexNft: (address: string) => Promise<NftPreviewDTO>;
    getTotalWallets: () => Promise<number>;
    getWallet: (walletAddress: string) => Promise<WalletDTO>;
    getWallet1155s: () => Promise<Held1155NftTokenDTO[]>;
    getNftPreviews: () => Promise<NftPreviewDTO[]>;
    getNftPreviewsByAddress(addresses: string[]): Promise<NftPreviewDTO[]>;
    getOwnedNftPreviews: (owner: string) => Promise<NftPreviewDTO[]>;
    indexNft1155: (address: string) => Promise<Nft1155DTO>;
    getNfts1155: () => Promise<Nft1155DTO[]>;
    getOwnedNfts1155: (owner: string) => Promise<Nft1155DTO[]>;
    getWalletNftPreviews: (walletAddress: string) => Promise<NftPreviewDTO[]>;
    getWallets: () => Promise<Wallet[]>;
    refreshWalletNft: (walletAddress: string, nftAddress: string) => Promise<number[]>;
    requestSignature: (unsignedData: SignableData) => Promise<SignatureResponse>;
}
