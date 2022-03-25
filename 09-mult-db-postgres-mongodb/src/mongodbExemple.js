const Mongoose = require("mongoose");

Mongoose.connect(
  "mongodb://root:root@localhost:27017/admin",
  { useNewUrlParser: true },
  function (error) {
    if (!error) return;
    console.log("Falha na conexao!", error);
  }
);

const connection = Mongoose.connection;

connection.once("open", async () => console.log("database rodando"));

// setTimeout(() => {
//   const state = connection.readyState;
//   console.log("state", state);
// }, 1000);

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

const model = Mongoose.model("heroe", heroeSchema);

async function main() {
  const resultCadastrar = await model.create({
    nome: "Batman",
    poder: "grana",
  });

  const listItens = await model.find();

  console.log("listItens", listItens);
}

main();
