
import { SqlBidRepository } from "../../repositories/implementations/bid/SqlBidRepository";
import { InsertBidController } from "./insertBidController";
import { InsertBidUseCase } from "./insertBidUseCase";


const sqlBidRepository = new SqlBidRepository();

const insertBidUseCase = new InsertBidUseCase(
    sqlBidRepository
);

const insertBidController = new InsertBidController(
    insertBidUseCase
);

export { insertBidUseCase, insertBidController }