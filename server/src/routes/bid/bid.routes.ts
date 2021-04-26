import { Router } from "express";
import { getBidsController } from "../../useCases/getBids";
import { insertBidController } from "../../useCases/insertBid";

const router = Router();

router.post('/insertBid', (request, response) => {
    return insertBidController.handle(request, response);
});

router.get('/getBids', (request, response) => {
    return getBidsController.handle(request, response);
});


export default router;