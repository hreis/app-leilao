import { Router, Request, Response } from "express";

import userInfo from "./userInfo/userInfo.routes";
import bid from "./bid/bid.routes";

const routes = Router();

routes.use("/userInfo", userInfo);
routes.use("/bid", bid);

export default routes;