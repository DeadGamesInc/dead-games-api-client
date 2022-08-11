var _a, _b;
import { ChainId } from '../model';
import urlJoin from '../utils/urlJoin';
var endpoints = (_a = {},
    _a[ChainId.BSC] = '',
    _a[ChainId.BSCTestnet] = '',
    _a[ChainId.Nervos] = '',
    _a[ChainId.NervosTestnet] = '',
    _a[ChainId.MaticTestnet] = 'https://wert-api.deadgames.io',
    _a[ChainId.Matic] = 'https://wert-api.deadgames.io',
    _a);
var basePaths = (_b = {},
    _b[ChainId.BSC] = '',
    _b[ChainId.BSCTestnet] = '',
    _b[ChainId.Nervos] = '',
    _b[ChainId.NervosTestnet] = '',
    _b[ChainId.MaticTestnet] = 'sandbox',
    _b[ChainId.Matic] = '',
    _b);
export var getApiEndpoint = function (chainId) { return endpoints[chainId]; };
export var getApiBasePath = function (chainId) { return basePaths[chainId]; };
export var getApiBaseUrl = function (chainId, endpoint) {
    return urlJoin(endpoint || getApiEndpoint(chainId), getApiBasePath(chainId));
};
