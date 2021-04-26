import { Request, Response } from "express";
import ApiError from "../../utils/error-handling";
import { GetBidsUseCase } from "./getBidsUseCase";

export class GetBidsController {

    constructor(private getBidsUseCase: GetBidsUseCase) { }

    async handle(request: Request, response: Response): Promise<Response> {

        try {

            let bid = await this.getBidsUseCase.execute();

            return response.send(bid);

        } catch (error) {
            response.status(404).send(
                ApiError.format({
                    code: 400,
                    message: 'Unexpected error.',
                }));
        }

    }
}