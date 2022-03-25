const EvenEmitter = require('events');

class MeuEmissor extends EvenEmitter {

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuario:click'
meuEmissor.on(nomeEvento, function (click) {
  console.log('um usuario clicou', click)
})




// meuEmissor.emit(nomeEvento, 'na barra de rolagem')
// meuEmissor.emit(nomeEvento, 'no ok')

// let count = 0
// setInterval(function () {
//   meuEmissor.emit(nomeEvento, 'no ok' + (count++))
// }, 1000)


const stdin = process.openStdin()
stdin.addListener('data', function (value) {
  console.log(`Voce digitou: ${value.toString().trim()}`)
})


// promisses so executam uma unica vez

// eventos podem ser executados em loop ou repetidamente
