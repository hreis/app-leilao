import { Bid } from "../../entities/bid/bid";

export interface IBidRepository {
    saveBid(bid: number, username: string, date: string): Promise<any>;
    getBids(): Promise<Bid[]>;
    getTotalBid(): Promise<number>;
}