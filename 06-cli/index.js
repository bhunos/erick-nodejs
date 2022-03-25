const { Command } = require("commander");
const res = require("express/lib/response");
const Database = require("./database");
const Heroi = require("./heroi");

async function main() {
  const program = new Command();

  program
    .version("v1")
    .option("-n, --nome [value]", "Nome do heroi")
    .option("-p, --poder [value]", "poder do heroi")
    .option("-i, --id [value]", "Id heroi")

    .option("-c, --cadastrar", "Cadastrar um heroi")
    .option("-l, --listar [value]", "listar um heroi")
    .option("-r, --remover [id]", "remover um heroi")
    .option("-a, --atualizar [value]", "atualiza heroi");

  program.parse(process.argv);

  const options = program.opts();

  const heroi = new Heroi(options);

  try {
    if (options.cadastrar) {
      delete heroi.id;
      const resultado = await Database.cadastrar(heroi);

      if (!resultado) {
        console.error("heroi nao cadastrado");
        return;
      }
      console.log("heroi cadastrado com sucesso");
    }

    if (options.listar) {
      const resultado = await Database.listar();
      console.log(resultado);
      return;
    }

    if (options.remover) {
      const resultado = await Database.remover(heroi.id);
      if (!resultado) {
        console.error("nao foi possivel remover o heroi");
        return;
      }

      console.log("heroi removido com sucesso");
    }

    if (options.atualizar) {
      const idParaAtualizar = parseInt(options.atualizar);
      const dado = JSON.stringify(heroi);
      const heroiAtualizar = JSON.parse(dado);
      const resultado = await Database.atualizar(
        idParaAtualizar,
        heroiAtualizar
      );

      if (!resultado) {
        console.error("nao foi possivel atualizar o heroi");
        return;
      }

      console.log("heroi atualizado com sucesso");
    }
  } catch (error) {
    console.error("DEU RUIM", error);
  }
}

main();
