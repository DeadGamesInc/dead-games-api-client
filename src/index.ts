import { DeadGamesClientConfig, DeadGamesHTTPClient } from './client'
import { ChainId } from './model/chain'
import DeadGamesApi from "./model/api";

export * from './model'

const deadgames = (config: DeadGamesClientConfig = { chainId: ChainId.BSC }): DeadGamesApi =>
  new DeadGamesHTTPClient(config)
export default deadgames
