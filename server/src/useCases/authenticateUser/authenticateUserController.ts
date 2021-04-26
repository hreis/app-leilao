import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";

export class AuthenticateUserController {

    constructor(private authenticateUserUseCase: AuthenticateUserUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        const { username, password } = request.body;

        try {

            let token = await this.authenticateUserUseCase.execute({
                username: username,
                password: password
            });

            return response.send({token: token});

        } catch (error) {
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}