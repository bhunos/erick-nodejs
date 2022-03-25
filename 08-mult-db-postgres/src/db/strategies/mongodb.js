const ICrud = require("./interface/interfaceCrud");

class MongoDb extends ICrud {
  constructor() {
    super();
  }

  create(item) {
    console.log("O item foi salvo em mongodb");
  }
}

module.exports = MongoDb;
