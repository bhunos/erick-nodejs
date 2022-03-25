const ICrud = require("./interface/interfaceCrud");
const Mongoose = require("mongoose");

const STATUS = {
  0: "Disconectado",
  1: "Conectando",
  2: "Conectado",
  3: "Disconectando",
};

class MongoDb extends ICrud {
  constructor() {
    super();
    this._heroes = null;
    this._driver = null;
    this.connect();
  }

  async isConnected() {
    const state = STATUS[this._driver.readyState];

    if (state === "Conectado") return state;

    if (state !== "Conectando") {
      return state;
    } else {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return state;
    }
  }

  defineModel() {
    const heroeSchema = new Mongoose.Schema({
      nome: {
        type: String,
        required: true,
      },
      poder: {
        type: String,
        required: true,
      },
      insertedAt: {
        type: Date,
        default: new Date(),
      },
    });

    this._heroes = Mongoose.model("heroe", heroeSchema);
  }

  connect() {
    Mongoose.connect(
      "mongodb://root:root@localhost:27017/admin",
      { useNewUrlParser: true },
      function (error) {
        if (!error) return;
        console.log("Falha na conexao!", error);
      }
    );

    const connection = Mongoose.connection;
    this._driver = connection;
    connection.once("open", async () => console.log("database rodando"));

    this.defineModel();
  }

  async create(item) {
    return await this._heroes.create(item);
  }

  read(item, skip = 0, limit = 10) {
    return this._heroes.find(item).skip(skip).limit(limit);
  }

  async update(id, item) {
    return await this._heroes.updateOne({ _id: id }, { $set: item });
  }

  async delete(id) {
    return await this._heroes.deleteOne({ _id: id });
  }
}

module.exports = MongoDb;
