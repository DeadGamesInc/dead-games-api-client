import { NftMetadata } from "./nftMetadata";
import { ImageCacheDetails } from "./imageCacheDetails";
export interface NftToken {
    tokenId: number;
    cid: string;
}
export interface NftTokenDTO extends NftToken {
    metadata: NftMetadata | null;
    imageCache: ImageCacheDetails | null;
}
