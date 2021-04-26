import * as dotenv from "dotenv";
import * as _ from "lodash";
import * as path from "path";

dotenv.config({ path: ".env" });

export const ENVIRONMENT = _.defaultTo(process.env.APP_ENV, "dev");
export const IS_PRODUCTION = ENVIRONMENT === "production";
export const APP_PORT = _.defaultTo(process.env.APP_PORT, 3333);
export const LOG_DIRECTORY = _.defaultTo(process.env.LOG_DIRECTORY, path.resolve('logs'));
export const JWT_SECRET = _.defaultTo(process.env.JWT_SECRET, "secret");
export const SESSION_SECRET = _.defaultTo(process.env.SESSION_SECRET, "secret");
export const BING_SEARCH_V7_SUBSCRIPTION_KEY = _.defaultTo(process.env.BING_SEARCH_V7_SUBSCRIPTION_KEY, "secretKey");

export const DB = {
  USER: _.defaultTo(process.env.DB_USER, "adkwwmds"),
  PASSWORD: _.defaultTo(process.env.DB_USER_PWD, "VHJDm5MHuoz0WxA6DyVcsrTHX5L4QCxh"),
  HOST: _.defaultTo(process.env.DB_HOST, "tuffi.db.elephantsql.com"),
  DATABASE: _.defaultTo(process.env.DB_DATABASE, "adkwwmds")
}
