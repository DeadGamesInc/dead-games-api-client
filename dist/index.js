import { DeadGamesHTTPClient } from './client';
import { ChainId } from './model/chain';
export * from './model';
var deadgames = function (config) {
    if (config === void 0) { config = { chainId: ChainId.BSC }; }
    return new DeadGamesHTTPClient(config);
};
export default deadgames;
