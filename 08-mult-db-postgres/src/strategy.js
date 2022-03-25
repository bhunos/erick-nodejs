// class NotImplementeExeptions extends Error {
//   constructor() {
//     super("Not Implemented Exception");
//   }
// }

// class ICrud {
//   create(item) {
//     throw new NotImplementeExeptions();
//   }

//   read(query) {
//     throw new NotImplementeExeptions();
//   }

//   update(id, item) {
//     throw new NotImplementeExeptions();
//   }

//   delete(id) {
//     throw new NotImplementeExeptions();
//   }
// }

// class MongoDb extends ICrud {
//   constructor() {
//     super();
//   }

//   create(item) {
//     console.log("o item foi salvo em mongodb");
//   }
// }

// class Postgres extends ICrud {
//   constructor() {
//     super();
//   }

//   create(item) {
//     console.log("o item foi salvo em Postgres");
//   }
// }

// class ContextStrategy {
//   constructor(strategy) {
//     this._database = strategy;
//   }

//   create(item) {
//     return this._database.create(item);
//   }

//   read(item) {
//     return this._database.read(item);
//   }

//   update(id, item) {
//     return this._database.update(id, item);
//   }

//   delete(id) {
//     return this._database.delete(id);
//   }
// }

// const contextMongo = new ContextStrategy(new MongoDb());
// contextMongo.create();

// const contextPostgres = new ContextStrategy(new Postgres());
// contextPostgres.create();
