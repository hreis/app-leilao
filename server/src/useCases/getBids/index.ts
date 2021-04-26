
import { SqlBidRepository } from "../../repositories/implementations/bid/SqlBidRepository";
import { GetBidsController } from "./getBidsController";
import { GetBidsUseCase } from "./getBidsUseCase";


const sqlBidRepository = new SqlBidRepository();

const getBidsUseCase = new GetBidsUseCase(
    sqlBidRepository
);

const getBidsController = new GetBidsController(
    getBidsUseCase
);

export { getBidsUseCase, getBidsController }