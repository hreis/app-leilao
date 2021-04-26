import { User } from "../../entities/userInfo/user";

export interface IUserInfoRepository {
    findUser(password: string): Promise<User>;
    authenticate(user: User, username: string): Promise<string>;
}