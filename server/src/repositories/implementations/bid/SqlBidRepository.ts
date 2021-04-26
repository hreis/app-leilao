import { Bid } from '../../../entities/bid/bid';
import * as pg from '../../../database/index';
import { IBidRepository } from "../../../repositories/bid/IBidRepository";

export class SqlBidRepository implements IBidRepository {

    async saveBid(bid: number, username: string, date: string): Promise<boolean> {

        let saved: boolean = false;

        await this.getTotalBid()
            .then(async (totalBid) => {

                if (totalBid[0].count < 999) await this.insertBid(bid, username, date)
                    .then(inserted => {
                        saved = inserted
                    })
                    .catch(err => {
                        saved = false
                        throw new Error(err);

                    });
                else return;

            });

        return saved;

    }

    async insertBid(bid: number, username: string, date: string): Promise<boolean> {

        let inserted: boolean = false;

        await pg.default.insert({
            bid: bid,
            username: username,
            date_bid: date
        })
            .into('leilao_bid')
            .then(() => {
                inserted = true;
            })
            .catch(err => {
                inserted = false;
                throw new Error(err);

            });;

        return inserted;
    }

    async getBids(): Promise<Bid[]> {

        try {

            return await pg.default('leilao_bid').select('*');

        } catch (error) {
            throw new Error(error);

        }

    }

    async getTotalBid(): Promise<number> {

        try {

            return await pg.default('leilao_bid')
                .count('id_bid')

        } catch (error) {
            throw new Error(error);

        }

    }

}