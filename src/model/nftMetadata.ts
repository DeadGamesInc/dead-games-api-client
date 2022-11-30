export interface NftMetadataTrait {
  traitType: string
  value: string | null
}

export interface NftMetadata {
  name: string
  description: string
  externalUrl: string | null
  image: string
  attributes: NftMetadataTrait[]
}
