import { IBidRepository } from "../../repositories/bid/IBidRepository";
export class CountTotalBidUseCase {

    constructor(private bidRepository: IBidRepository) {}

    async execute(): Promise<number> {

        return await this.bidRepository.getTotalBid();
    }

}