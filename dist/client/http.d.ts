import DeadGamesApi from '../model/api';
import { Nft } from '../model';
import { DeadGamesClientConfig } from './types';
import { Wallet } from "../model/wallet";
interface DeadGamesHTTPClientConfig extends DeadGamesClientConfig {
    endpointOverride?: string;
}
export default class DeadGamesHTTPClient implements DeadGamesApi {
    private readonly http;
    constructor(config?: DeadGamesHTTPClientConfig);
    private callPluralApi;
    getNfts: () => Promise<Nft[]>;
    getNft: (address: string) => Promise<Nft>;
    getTotalWallets: () => Promise<number>;
    getWallet: (walletAddress: string) => Promise<Wallet>;
    getWallets: () => Promise<Wallet[]>;
    refreshWalletNft: (walletAddress: string, nftAddress: string) => Promise<number[]>;
}
export {};
