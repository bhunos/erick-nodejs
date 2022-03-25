// yarn add sequelize pg pg-hstore

const Sequelize = require("sequelize");

const driver = new Sequelize("heroes", "root", "root", {
  host: "localhost",
  dialect: "postgres",
  quoteIdentifiers: false,
  operatorsAliases: false,
});

async function main() {
  const Herois = driver.define(
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

  await Herois.sync();

  // await Herois.create({
  //   nome: "lanterna verde",
  //   poder: "anel",
  // });

  const result = await Herois.findAll({
    raw: true,
    attribues: ["nome"],
  });
  console.log("result", result);
}

main();
