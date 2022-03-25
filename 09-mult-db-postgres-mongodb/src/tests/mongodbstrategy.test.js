const assert = require("assert");
const Mongodb = require("../db/strategies/mongodb");
const Context = require("../db/strategies/base/contextStrategy");
const res = require("express/lib/response");

const MOCK_HEROI_CADASTRAR = {
  nome: `Gaviao Negro-${Date.now()}`,
  poder: "flexas",
};

const MOCK_HEROI_DEFAULT = {
  nome: "homem aranha",
  poder: "super teia",
};

const MOCK_HEROI_ATUALIZAR = {
  nome: "Patolino",
  poder: "chato",
};

let MOCk_HEROE_ID = "";

const context = new Context(new Mongodb());
describe("MongoDb Suite de testes", function () {
  this.beforeAll(() => {
    context.create(MOCK_HEROI_DEFAULT);
  });

  it("Verificar conexao", async () => {
    const result = await context.isConnected();
    const expected = "Conectado";

    assert.deepEqual(result, expected);
  });

  it("Cadastrar", async () => {
    const { nome, poder } = await context.create(MOCK_HEROI_CADASTRAR);
    const expected = MOCK_HEROI_CADASTRAR;
    const results = await context.create(MOCK_HEROI_ATUALIZAR);
    MOCk_HEROE_ID = results._id;

    assert.deepEqual({ nome, poder }, expected);
  });

  it("Listar", async () => {
    const [{ nome, poder }] = await context.read({
      nome: MOCK_HEROI_DEFAULT.nome,
    });

    const result = {
      nome,
      poder,
    };

    assert.deepEqual(result, MOCK_HEROI_DEFAULT);
  });

  it("Atualizar", async () => {
    const result = await context.update(MOCk_HEROE_ID, {
      nome: "Pernalonga",
    });
    assert.deepEqual(result.modifiedCount, 1);
  });

  it("Remover", async () => {
    const result = await context.delete(MOCk_HEROE_ID);
    console.log("result", result);

    assert.deepEqual(result.deletedCount, 1);
  });
});
