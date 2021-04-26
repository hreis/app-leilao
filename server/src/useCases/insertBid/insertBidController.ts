import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
import { InsertBidUseCase } from "./insertBidUseCase";
import * as jwt from "jsonwebtoken";

export class InsertBidController {

    constructor(private insertBidUseCase: InsertBidUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        // const token = request.headers['authorization'];
        // if (!token) return response.status(401).json({ auth: false, message: 'No token provided.' });

        // jwt.verify(token, process.env.SECRET, function (err, decoded) {
        //     if (err) return response.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
    
        //     // se tudo estiver ok, salva no request para uso posterior
        //     request = decoded.id;
        //     //next();
        // });

        const { username, bid, date } = request.body;

        try {

            let inserted = await this.insertBidUseCase.execute({
                username: username,
                bid: bid,
                date: date
            });

            return response.send(inserted);

        } catch (error) {
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}