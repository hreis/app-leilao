import { Bid } from "../../entities/bid/bid";
import { IBidRepository } from "../../repositories/bid/IBidRepository";

export class GetBidsUseCase {

    constructor(private bidRepository: IBidRepository) {}

    async execute(): Promise<Bid[]> {

        return await this.bidRepository.getBids();
    }

}