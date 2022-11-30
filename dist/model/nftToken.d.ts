import { NftMetadata } from "./nftMetadata";
import { ImageCacheDetails } from "./imageCacheDetails";
export interface NftToken {
    tokenId: number;
    uri: string;
    lastBlockUpdate: number;
}
export interface NftTokenDTO extends NftToken {
    metadata: NftMetadata | null;
    imageCache: ImageCacheDetails | null;
}
export interface NftToken1155DTO extends NftTokenDTO {
    totalSupply: number;
}
