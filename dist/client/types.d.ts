import { ChainId } from '../model/chain';
export interface DeadGamesClientConfig {
    chainId: ChainId;
    endpointOverride?: string;
}
export declare const DEFAULT_CLIENT_CONFIG: Readonly<DeadGamesClientConfig>;
