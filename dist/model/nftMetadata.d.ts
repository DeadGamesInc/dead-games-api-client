export interface NftMetadataTrait {
    traitType: string;
    value: string | null;
}
export interface NftMetadata {
    name: string;
    description: string;
    externalUrl: string;
    image: string;
    attributes: NftMetadataTrait[];
}
