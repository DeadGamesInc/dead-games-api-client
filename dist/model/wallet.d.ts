import { Address } from './common';
import { NftDTO } from "./nft";
import { NftMetadata } from "./nftMetadata";
import { ImageCacheDetails } from "./imageCacheDetails";
export interface HeldNft {
    wallet: Address;
    address: Address;
    tokenIds: number[];
}
export interface Held1155NftTokenDTO {
    wallet: Address;
    address: Address;
    tokenId: number;
    uri: string;
    balance: bigint;
    metadata: NftMetadata;
    imageCache: ImageCacheDetails;
}
export interface Wallet {
    address: Address;
    heldNfts: HeldNft[];
}
export interface WalletDTO extends Omit<Wallet, 'heldNfts'> {
    heldNfts: NftDTO[];
}
