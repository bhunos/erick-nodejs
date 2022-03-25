const ICrud = require("./../interface/interfaceCrud");

class ContextStrategy extends ICrud {
  constructor(strategy) {
    super();
    this._database = strategy;
  }

  create(item) {
    return this._database.create(item);
  }

  read(item) {
    return this._database.read(item);
  }

  update(id, item) {
    return this._database.update(id, item);
  }

  delete(id) {
    return this._database.delete(id);
  }
  isConnected() {
    return this._database.isConnected();
  }
  conntect() {
    return this._database.conntect();
  }
}

module.exports = ContextStrategy;
