export type Commodity = 'ETH' | 'MATIC' | 'USDC' | 'agEUR' | 'SENT' | 'wETH' | 'wMATIC' | 'XTZ' | 'EURL' | 'DOGA' | 'GHST'

export interface SignableData {
  address: string
  commodity: Commodity
  commodity_amount: number
  pk_id: string
  sc_address: string
  sc_input_data: string
  signature: string
}

export interface SignatureResponse {
  signedData: SignableData
  click_id: string
}