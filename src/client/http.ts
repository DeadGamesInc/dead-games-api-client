import { getApiBaseUrl as nftApiBaseUrl } from '../config/nftApiHttp'
import { getApiBaseUrl as wertApiBaseUrl } from '../config/wertApiHttp'
import DeadGamesApi from '../model/api'
import { Nft, NftDTO } from '../model'
import { HTTPAPICaller, getReturnUndefinedOn404Config } from '../utils/http'
import { DEFAULT_CLIENT_CONFIG, DeadGamesClientConfig } from './types'
import { Wallet, WalletDTO } from "../model/wallet";
import { SignableData, SignatureResponse } from "../model/wert";

interface DeadGamesHTTPClientConfig extends DeadGamesClientConfig {
  endpointOverride?: string
}

const join = (path: string, ...segments: any[]) => [path, ...segments].join('/')

export default class DeadGamesHTTPClient implements DeadGamesApi {
  private readonly http: HTTPAPICaller
  private readonly httpWert: HTTPAPICaller

  constructor(config: DeadGamesHTTPClientConfig = DEFAULT_CLIENT_CONFIG) {
    const { chainId, endpointOverride } = config

    this.http = new HTTPAPICaller(nftApiBaseUrl(chainId, endpointOverride))
    this.httpWert = new HTTPAPICaller(wertApiBaseUrl(chainId, endpointOverride))
  }

  private callPluralApi = async <R, T>(api: string, resultMapper?: (raw: R) => T): Promise<T[]> => {
    const results: R[] = await this.http.get(api)
    return resultMapper ? results.map(resultMapper) : (results as unknown as T[])
  }

  getNfts = (): Promise<Nft[]> => this.callPluralApi('getNfts')

  getNft = (address: string): Promise<NftDTO> =>
    this.http.get(
      join('getNft', address),
      getReturnUndefinedOn404Config()
    )

  getTotalWallets = (): Promise<number> =>
    this.http.get(
      join('getTotalWallets'),
      getReturnUndefinedOn404Config()
    )

  getWallet = (walletAddress: string): Promise<WalletDTO> =>
    this.http.get(
      join('getWallet', walletAddress),
      getReturnUndefinedOn404Config(),
    )

  getWallets = (): Promise<Wallet[]> => this.callPluralApi('getWallets')

  refreshWalletNft = (walletAddress: string, nftAddress: string): Promise<number[]> =>
    this.http.get(
      join('refreshNftAndGetWalletTokens', walletAddress, nftAddress),
      getReturnUndefinedOn404Config(),
    )

  requestSignature = (unsignedData: SignableData): Promise<SignatureResponse> => this.httpWert.post('requestSignature', unsignedData)
}

