
import { SqlBidRepository } from "../../repositories/implementations/bid/SqlBidRepository";
import { CountTotalBidController } from "./countTotalBidController";
import { CountTotalBidUseCase } from "./countTotalBidUseCase";


const sqlBidRepository = new SqlBidRepository();

const countTotalBidUseCase = new CountTotalBidUseCase(
    sqlBidRepository
);

const countTotalBidController = new CountTotalBidController(
    countTotalBidUseCase
);

export { countTotalBidUseCase, countTotalBidController }