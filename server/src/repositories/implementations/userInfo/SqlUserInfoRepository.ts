import { User } from "../../../entities/userInfo/user";
import { IUserInfoRepository } from "../../../repositories/userInfo/IUserInfoRepository";
import * as pg from '../../../database/index';
import config from "../../../config/config";
import * as jwt from "jsonwebtoken";

export class SqlUserInfoRepository implements IUserInfoRepository {

    async findUser(password: string): Promise<User> {

        var user: User;

        try {

            user = await pg.default<User>('leilao_user')
            .where('password', password)
            .select('id', 'password').first();

            return user;

        } catch (error) {
            throw new Error(error);
        }

    }

    async authenticate(user: User, username: string): Promise<string> {

        try {

                let token = jwt.sign(
                    {
                        id: user.id,
                        username: username,
                        role: username === 'admin' ? 'admin' : 'user',
                    },

                    config.jwtSecret,
                    { expiresIn: "1h" }
                );

                return token;

        } catch (error) {
            throw new Error(error);
        }

    }

}