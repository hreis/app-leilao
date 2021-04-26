import { SqlUserInfoRepository } from "../../repositories/implementations/userInfo/SqlUserInfoRepository";
import { AuthenticateUserController } from "./authenticateUserController";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";


const sqlUsersRepository = new SqlUserInfoRepository();

const authenticateUserUseCase = new AuthenticateUserUseCase(
    sqlUsersRepository
);

const authenticateUserController = new AuthenticateUserController(
    authenticateUserUseCase
);

export { authenticateUserUseCase, authenticateUserController }