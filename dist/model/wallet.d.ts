import { Address } from './common';
import { NftDTO } from "./nft";
export interface HeldNft {
    wallet: Address;
    address: Address;
    tokenIds: number[];
}
export interface Wallet {
    address: Address;
    heldNfts: HeldNft[];
}
export interface WalletDTO extends Omit<Wallet, 'heldNfts'> {
    heldNfts: NftDTO[];
}
