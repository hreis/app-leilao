import knex from 'knex';
import { DB } from "../utils/secrets";
import * as attachPaginate from 'knex-paginate';

const connection = knex({

    client: 'pg',
    connection: {
        host: DB.HOST,
        user: DB.USER,
        password: DB.PASSWORD,
        database: DB.DATABASE,
        requestTimeout: Infinity
    },
    useNullAsDefault: true,

});

attachPaginate.attachPaginate();

export default connection;
