// 0 Obter um usuario
// 1 obter o numero de telefone de um usuario a partir de seu id
// 2 obter o endereco do usuario pelo id

const util = require("util");

const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resovePromisse(resolve, reject) {
    setTimeout(function () {
      // return reject(new Error('DEu ruim de VERDADE!'))

      return resolve({
        id: 1,
        nome: "aladin",
        dataNascimento: new Date(),
      });
    }, 1000);
  });
}

function obterTelefone(idIsuario) {
  return new Promise(function resovePromisse(resolve, reject) {
    setTimeout(function () {
      return resolve({
        telefone: "984235683",
        ddd: 44,
      });
    }, 2000);
  });
}

function obterEndereco(idIsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: "dos bobos",
      numero: 0,
    });
  }, 2000);
}

main()
async function main() {
  try {
    console.time('medida-promise')
    const usuario = await obterUsuario()
    // const telefone = await obterTelefone(usuario.id)
    // const endereco = await obterEnderecoAsync(usuario.id)

    const resultado = await Promise.all([
      obterTelefone(usuario.id),
      obterEnderecoAsync(usuario.id)
    ])

    const endereco = resultado[1]
    const telefone = resultado[0]

    console.log(`Nome: ${usuario.nome},
    Telefone: (${telefone.ddd}) ${telefone.telefone}
    endereco: ${endereco.rua}, ${endereco.numero}`)

    console.timeEnd('medida-promise')

  }catch (error) {
    console.log('DEU RUIM', error)
  }
}

// const usuarioPromise = obterUsuario();

// usuarioPromise
//   .then(function (usuario) {
//     return obterTelefone(usuario.id).then(function resoverTelefone(result) {
//       return {
//         usuario: {
//           nome: usuario.nome,
//           id: usuario.id,
//         },
//         telefone: result,
//       };
//     });
//   })
//   .then(function (resultado) {
//     const endereco = obterEnderecoAsync(resultado.usuario.id);
//     return endereco.then(function resoverEndereco(result) {
//       return {
//         usuario: resultado.usuario,
//         telefone: resultado.telefone,
//         endereco: result,
//       };
//     });
//   })
//   .then(function (resultado) {
//     console.log(`Nome: ${resultado.usuario.nome},
//            Emdereco: ${resultado.endereco.rua} ${resultado.endereco.numero},
//            telefone: (${resultado.telefone.ddd}) ${resultado.telefone.telefone}`);
//   })
//   .catch(function (error) {
//     console.log("deu ruim", error);
//   });

// obterUsuario(function resoverUsuario(erro, usuario) {
//   if (erro) {
//     console.log("deu ruim em usuario");
//   }

//   obterTelefone(usuario.id, function resoverTelefone(erro1, telefone) {
//     if (erro1) {
//       console.log("deu ruim em telefone");
//     }

//     obterEndereco(usuario.id, function resoverEndereco(erro2, endereco) {
//       if (erro2) {
//         console.log("deu ruim em endereco");
//       }

//       console.log(`Nome: ${usuario.name},
//       Emdereco: ${endereco.rua} ${endereco.numero},
//       telefone: (${telefone.ddd}) ${telefone.telefone}`);
//     });
//   });
// });

// const telefone = obterTelefone(usuario.id)

// console.log('telefone', telefone)

//Entendo
