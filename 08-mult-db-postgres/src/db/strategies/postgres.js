const ICrud = require("./interface/interfaceCrud");

const Sequelize = require("sequelize");

class Postgres extends ICrud {
  constructor() {
    super();
    this._driver = null;
    this._herois = null;
    this._connect();
  }

  async isConnected() {
    try {
      await this._driver.authenticate();
      return true;
    } catch (error) {
      console.log("fail", error);
      return false;
    }
  }

  async defineModel() {
    this._herois = this._driver.define(
      "herois",
      {
        id: {
          type: Sequelize.INTEGER,
          required: true,
          primaryKey: true,
          autoIncrement: true,
        },
        nome: {
          type: Sequelize.STRING,
          required: true,
        },
        poder: {
          type: Sequelize.STRING,
          required: true,
        },
      },
      {
        tableName: "TB_HEROIS",
        freezeTablename: false,
        timestamps: false,
      }
    );

    await this._herois.sync();
  }

  async create(item) {
    const { dataValues } = await this._herois.create(item);
    return dataValues;
  }

  async update(id, item) {
    return this._herois.update(item, { where: { id: id } });
  }

  async read(item = {}) {
    return this._herois.findAll({ where: item, raw: true });
  }

  async delete(id) {
    const query = id ? { id } : {};
    return this._herois.destroy({ where: query });
  }

  async _connect() {
    this._driver = new Sequelize("heroes", "root", "root", {
      host: "localhost",
      dialect: "postgres",
      quoteIdentifiers: false,
      operatorsAliases: false,
    });

    await this.defineModel();
  }
}

module.exports = Postgres;
