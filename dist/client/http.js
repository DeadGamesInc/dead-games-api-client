var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { getApiBaseUrl as nftApiBaseUrl } from '../config/nftApiHttp';
import { getApiBaseUrl as wertApiBaseUrl } from '../config/wertApiHttp';
import { HTTPAPICaller, getReturnUndefinedOn404Config } from '../utils/http';
import { DEFAULT_CLIENT_CONFIG } from './types';
var join = function (path) {
    var segments = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        segments[_i - 1] = arguments[_i];
    }
    return __spreadArray([path], segments, true).join('/');
};
var toNftPreview = function (rawNftPreviewDto) {
    var nftTokens = rawNftPreviewDto.nftTokens, nftPreviewDto = __rest(rawNftPreviewDto, ["nftTokens"]);
    return nftPreviewDto;
};
var DeadGamesHTTPClient = /** @class */ (function () {
    function DeadGamesHTTPClient(config) {
        if (config === void 0) { config = DEFAULT_CLIENT_CONFIG; }
        var _this = this;
        this.callPluralApi = function (api, resultMapper) { return __awaiter(_this, void 0, void 0, function () {
            var results;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(api, getReturnUndefinedOn404Config())];
                    case 1:
                        results = _a.sent();
                        return [2 /*return*/, resultMapper ? results.map(resultMapper) : results];
                }
            });
        }); };
        this.getNfts = function () { return _this.callPluralApi('getNfts'); };
        this.getNft = function (address) {
            return _this.http.get(join('getNft', address), getReturnUndefinedOn404Config());
        };
        this.indexNft = function (address) {
            return _this.http.get(join('indexNft', address), getReturnUndefinedOn404Config());
        };
        this.getTotalWallets = function () {
            return _this.http.get(join('getTotalWallets'), getReturnUndefinedOn404Config());
        };
        this.getWallet = function (walletAddress) {
            return _this.http.get(join('getWallet', walletAddress), getReturnUndefinedOn404Config());
        };
        this.getWallet1155s = function (wallet) {
            return _this.callPluralApi(join('getWallet1155s', wallet));
        };
        this.getNftPreviews = function () {
            return _this.callPluralApi(join('getNftPreviews'), toNftPreview);
        };
        this.getOwnedNftPreviews = function (owner) {
            return _this.callPluralApi(join('getOwnedNftPreviews', owner), toNftPreview);
        };
        this.indexNft1155 = function (address) {
            return _this.http.get(join('indexNft1155', address), getReturnUndefinedOn404Config());
        };
        this.getNfts1155 = function () {
            return _this.callPluralApi(join('getNfts1155'));
        };
        this.getOwnedNfts1155 = function (owner) {
            return _this.callPluralApi(join('getOwnedNfts1155', owner));
        };
        this.getWalletNftPreviews = function (walletAddress) {
            return _this.callPluralApi(join('getWalletNftPreviews', walletAddress), toNftPreview);
        };
        this.getWallets = function () { return _this.callPluralApi('getWallets'); };
        this.refreshWalletNft = function (walletAddress, nftAddress) {
            return _this.http.get(join('refreshNftAndGetWalletTokens', walletAddress, nftAddress), getReturnUndefinedOn404Config());
        };
        this.requestSignature = function (unsignedData) { return _this.httpWert.post('requestSignature', unsignedData); };
        var chainId = config.chainId, endpointOverride = config.endpointOverride;
        this.http = new HTTPAPICaller(nftApiBaseUrl(chainId, endpointOverride));
        this.httpWert = new HTTPAPICaller(wertApiBaseUrl(chainId, endpointOverride));
    }
    DeadGamesHTTPClient.prototype.getNftPreviewsByAddress = function (addresses) {
        return __awaiter(this, void 0, void 0, function () {
            var nfts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.post('getNftPreviewsByAddress', addresses, getReturnUndefinedOn404Config())];
                    case 1:
                        nfts = _a.sent();
                        return [2 /*return*/, nfts.map(toNftPreview)];
                }
            });
        });
    };
    return DeadGamesHTTPClient;
}());
export default DeadGamesHTTPClient;
