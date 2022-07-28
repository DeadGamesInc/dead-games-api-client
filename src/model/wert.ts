export type Commodity = 'ETH' | 'MATIC' | 'USDC' | 'agEUR' | 'SENT' | 'wETH' | 'wMATIC' | 'XTZ' | 'EURL' | 'DOGA' | 'GHST'

export interface SignedData {
  address: string
  commodity: Commodity
  commodity_amount: number
  pk_id: string
  sc_address: string
  sc_input_data: string
  sc_id: string
  signature: string
}

export type SignableData = Omit<SignedData, 'sc_id' | 'signature'>

export interface SignatureResponse {
  signedData: SignedData
  click_id: string
}