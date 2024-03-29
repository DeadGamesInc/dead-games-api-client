var _a, _b;
import { ChainId } from '../model';
import urlJoin from '../utils/urlJoin';
var endpoints = (_a = {},
    _a[ChainId.BSC] = 'https://nft-api.deadgames.io',
    _a[ChainId.BSCTestnet] = 'https://nft-api.deadgames.io',
    _a[ChainId.Nervos] = 'https://nft-api.deadgames.io',
    _a[ChainId.NervosTestnet] = 'https://nft-api.deadgames.io',
    _a[ChainId.MaticTestnet] = 'https://nft-api.deadgames.io',
    _a[ChainId.Matic] = 'https://nft-api.deadgames.io',
    _a);
var basePaths = (_b = {},
    _b[ChainId.BSC] = 'bsc',
    _b[ChainId.BSCTestnet] = 'bsc_testnet',
    _b[ChainId.Nervos] = 'nervos',
    _b[ChainId.NervosTestnet] = 'nervos_testnet',
    _b[ChainId.MaticTestnet] = 'matic_testnet',
    _b[ChainId.Matic] = 'matic',
    _b);
export var getApiEndpoint = function (chainId) { return endpoints[chainId]; };
export var getApiBasePath = function (chainId) { return basePaths[chainId]; };
export var getApiBaseUrl = function (chainId, endpoint) {
    return urlJoin(endpoint || getApiEndpoint(chainId), getApiBasePath(chainId));
};
