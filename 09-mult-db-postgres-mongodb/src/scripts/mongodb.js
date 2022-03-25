// // docker ps
// // docker exec - it 276e81ae9fee /
// //   mongo - u root - p root--authenticationDatabase heroes

// //   docker exec -it 276e81ae9fee \
// //  mongo --host localhost -u root -p root --authenticationDatabase admin

// show dbs

// use admin

// show collections

// // create

// db.heroes.insert({
//   nome: 'Flash',
//   poder: 'Velocidade',
//   nascimento: '1998-01-01'
// })

// db.heroes.find().pretty()

// for (let i = 0; i <= 10000; i++){
//   db.heroes.insert({
//     nome: `Clorne${i}`,
//     poder: 'Velocidade',
//     nascimento: '1998-01-01'
//   })
// }

// // read
// db.heroes.count()
// db.heroes.findOne()
// db.heroes.find({nome: 'chapolin'}).limit(1000).sort({ nome: -1 })

// db.heroes.find({}, { poder: 1, _id: 0 })

// //update
// db.heroes.update({ _id: Object('623d2f58eb4f7ba33299e863') },
// {nome: 'mulher maravilha'})

// db.heroes.update({ nome: 'Clorne9999' },
//   { $set: { nome: 'chapolin' } })

// db.heroes.findOne({ _id: Object("623d2ec9eb4f7ba33299c1ac") })

// //delete

// db.heroes.remove({})
