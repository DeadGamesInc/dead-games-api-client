import { Address } from './common';
export interface HeldNft {
    wallet: Address;
    address: Address;
    tokenIds: number[];
}
export interface Wallet {
    address: Address;
    heldNfts: HeldNft[];
}
