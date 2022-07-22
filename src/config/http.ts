import { ChainId } from '../model'
import urlJoin from '../utils/urlJoin'

const endpoints: Record<ChainId, string> = {
  [ChainId.BSC]: 'https://nft-api.deadgames.io',
  [ChainId.BSCTestnet]: 'https://nft-api.deadgames.io',
  [ChainId.Nervos]: 'https://nft-api.deadgames.io',
  [ChainId.NervosTestnet]: 'https://nft-api.deadgames.io',
  [ChainId.MaticTestnet]: 'https://nft-api.deadgames.io',
}

const basePaths: Record<ChainId, string> = {
  [ChainId.BSC]: 'bsc',
  [ChainId.BSCTestnet]: 'bsc_testnet',
  [ChainId.Nervos]: 'nervos',
  [ChainId.NervosTestnet]: 'nervos_testnet',
  [ChainId.MaticTestnet]: 'matic_testnet',
}

export const getApiEndpoint = (chainId: ChainId): string => endpoints[chainId]
export const getApiBasePath = (chainId: ChainId): string => basePaths[chainId]
export const getApiBaseUrl = (chainId: ChainId, endpoint?: string | undefined): string =>
  urlJoin(endpoint || getApiEndpoint(chainId), getApiBasePath(chainId))
