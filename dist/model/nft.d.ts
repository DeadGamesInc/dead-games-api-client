import { Address } from './common';
import { NftToken, NftToken1155DTO, NftTokenDTO } from "./nftToken";
export interface NftBase {
    address: Address;
    owner: Address;
    lastUpdate: number;
    nftTokens: NftToken[];
}
export interface Nft extends NftBase {
    name: string;
    symbol: string;
    totalSupply: number;
    baseURI: string;
    previewToken: NftToken;
}
export interface NftDTO extends Omit<Nft, 'nftTokens'> {
    nftTokens: NftTokenDTO[];
}
export interface RawNftPreviewDTO extends Omit<Nft, 'previewToken'> {
    previewToken: NftTokenDTO;
}
export interface NftPreviewDTO extends Omit<RawNftPreviewDTO, 'nftTokens'> {
    previewToken: NftTokenDTO;
}
export interface Nft1155DTO extends Omit<NftBase, 'nftTokens'> {
    nftTokens: NftToken1155DTO[];
}
