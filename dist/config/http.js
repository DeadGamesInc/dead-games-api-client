var _a, _b;
import { ChainId } from '../model';
import urlJoin from '../utils/urlJoin';
var endpoints = (_a = {},
    _a[ChainId.BSC] = 'http://localhost:5001',
    _a[ChainId.BSCTestnet] = 'http://localhost:5001',
    _a[ChainId.Nervos] = 'http://localhost:5001',
    _a[ChainId.NervosTestnet] = 'http://localhost:5001',
    _a);
var basePaths = (_b = {},
    _b[ChainId.BSC] = 'bsc',
    _b[ChainId.BSCTestnet] = 'bsc_testnet',
    _b[ChainId.Nervos] = 'nervos',
    _b[ChainId.NervosTestnet] = 'nervos_testnet',
    _b);
export var getApiEndpoint = function (chainId) { return endpoints[chainId]; };
export var getApiBasePath = function (chainId) { return basePaths[chainId]; };
export var getApiBaseUrl = function (chainId, endpoint) {
    return urlJoin(endpoint || getApiEndpoint(chainId), getApiBasePath(chainId));
};
