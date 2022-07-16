import { getApiBaseUrl } from '../config/http'
import DeadGamesApi from '../model/api'
import { Nft } from '../model'
import { HTTPAPICaller, getReturnUndefinedOn404Config } from '../utils/http'
import { DEFAULT_CLIENT_CONFIG, DeadGamesClientConfig } from './types'
import { Wallet } from "../model/wallet";

interface DeadGamesHTTPClientConfig extends DeadGamesClientConfig {
  endpointOverride?: string
}

const join = (path: string, ...segments: any[]) => [path, ...segments].join('/')

export default class DeadGamesHTTPClient implements DeadGamesApi {
  private readonly http: HTTPAPICaller

  constructor(config: DeadGamesHTTPClientConfig = DEFAULT_CLIENT_CONFIG) {
    const { chainId, endpointOverride } = config

    this.http = new HTTPAPICaller(getApiBaseUrl(chainId, endpointOverride))
  }

  private callPluralApi = async <R, T>(api: string, resultMapper?: (raw: R) => T): Promise<T[]> => {
    const results: R[] = await this.http.get(api)
    return resultMapper ? results.map(resultMapper) : (results as unknown as T[])
  }

  getNfts = (): Promise<Nft[]> => this.callPluralApi('getNfts')

  getNft = (address: string): Promise<Nft> =>
    this.http.get(
      join('getNft', address),
      getReturnUndefinedOn404Config()
    )

  getTotalWallets = (): Promise<number> =>
    this.http.get(
      join('getTotalWallets'),
      getReturnUndefinedOn404Config()
    )

  getWallet = (walletAddress: string): Promise<Wallet> =>
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
}

