import { ChainId } from '../model/chain'

export interface DeadGamesClientConfig {
  chainId: ChainId
}

export const DEFAULT_CLIENT_CONFIG: Readonly<DeadGamesClientConfig> = {
  chainId: ChainId.BSC,
}
