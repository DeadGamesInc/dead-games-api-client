import { ChainId } from '../model'
import urlJoin from '../utils/urlJoin'


const endpoints: Record<ChainId, string> = {
  [ChainId.BSC]: '',
  [ChainId.BSCTestnet]: '',
  [ChainId.Nervos]: '',
  [ChainId.NervosTestnet]: '',
  [ChainId.MaticTestnet]: 'https://wert-api.deadgames.io',
  [ChainId.Matic]: 'https://wert-api.deadgames.io',
}

const basePaths: Record<ChainId, string> = {
  [ChainId.BSC]: '',
  [ChainId.BSCTestnet]: '',
  [ChainId.Nervos]: '',
  [ChainId.NervosTestnet]: '',
  [ChainId.MaticTestnet]: 'sandbox',
  [ChainId.Matic]: '',
}

export const getApiEndpoint = (chainId: ChainId): string => endpoints[chainId]
export const getApiBasePath = (chainId: ChainId): string => basePaths[chainId]
export const getApiBaseUrl = (chainId: ChainId, endpoint?: string | undefined): string =>
  urlJoin(endpoint || getApiEndpoint(chainId), getApiBasePath(chainId))
