import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
import { CountTotalBidUseCase } from "./countTotalBidUseCase";
import * as jwt from "jsonwebtoken";

export class CountTotalBidController {

    constructor(private countTotalBidUseCase: CountTotalBidUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            let totalBid = await this.countTotalBidUseCase.execute();

            return response.send(totalBid);

        } catch (error) {
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}