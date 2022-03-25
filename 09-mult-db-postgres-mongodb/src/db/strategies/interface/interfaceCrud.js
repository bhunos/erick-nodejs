class NotImplementeExeptions extends Error {
  constructor() {
    super("Not Implemented Exception");
  }
}

class ICrud {
  create(item) {
    throw new NotImplementeExeptions();
  }

  read(query) {
    throw new NotImplementeExeptions();
  }

  update(id, item) {
    throw new NotImplementeExeptions();
  }

  delete(id) {
    throw new NotImplementeExeptions();
  }
  isConnected() {
    throw new NotImplementeExeptions();
  }
  connect() {
    throw new NotImplementeExeptions();
  }
}

module.exports = ICrud;
