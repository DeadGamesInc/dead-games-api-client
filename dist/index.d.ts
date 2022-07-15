import { DeadGamesClientConfig } from './client';
import DeadGamesApi from "./model/api";
export * from './model';
declare const deadgames: (config?: DeadGamesClientConfig) => DeadGamesApi;
export default deadgames;
