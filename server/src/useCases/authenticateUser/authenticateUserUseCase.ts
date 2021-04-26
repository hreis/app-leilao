import { IUserInfoRepository } from "../../repositories/userInfo/IUserInfoRepository";
import { IAuthenticateUserDTO } from "./authenticateUserDTO";

export class AuthenticateUserUseCase {

    constructor(private userInfoRepository: IUserInfoRepository) {}

    async execute(data: IAuthenticateUserDTO): Promise<string> {

        const user = await this.userInfoRepository.findUser(data.password);

        if (user) return await this.userInfoRepository.authenticate(user, data.username);
        else return null;

    }

}