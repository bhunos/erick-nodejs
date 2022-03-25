const ContextStrategy = require("./db/strategies/base/contextStrategy");

const MongoDb = require("./db/strategies/mongodb");
const Postgres = require("./db/strategies/postgres");

const contextMongo = new ContextStrategy(new MongoDb());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();
