import { IBidRepository } from "../../repositories/bid/IBidRepository";
import { IInsertBidDTO } from "./insertBidDTO";

export class InsertBidUseCase {

    constructor(private bidRepository: IBidRepository) {}

    async execute(data: IInsertBidDTO): Promise<boolean> {

        return await this.bidRepository.saveBid(data.bid, data.username, data.date);
    }

}