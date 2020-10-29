/*
Para ver en el inventario todos los objetos con un stock
igual a 1350 guardado en un almacén de Algodonales
*/
db.inventory.find({ stock: 1350, almacen: "Algodonales" }).pretty()

//Si los quisiera buscar por loa dos separado lo haría así:
db.inventory.find({ stock: 1350 }).pretty()

db.inventory.find({ almacen: "Algodonales" }).pretty()

/*Buscaré los porductos en stock de entre 420 unidades y 300 unidades, usando para ello
los comandos $lt (menor que) y $gt (mayor que)*/
db.inventory.find({ stock: {$lt: 420}, stock: {$gt: 300}}).pretty()

//Ver objetos almacenados en Murcia.
db.inventory.find({ almacen: "Murcia" })

db.inventory.find({ almacen: {$eq: "D" }})

//Ver objetos almacenados específicamente en Murcia y Sevilla, y que me los cuente.
db.inventory.find({ almacen: { $in: [ "Murcia", "Sevilla" ]}}).count()

//El comando "or" une documentos que tengan la misma condición.
db.inventory.find({$or:[ {status: {$eq: "A"} },{status: {$eq: "D"} }]}).pretty()

//
db.inventory.find({ $and: [{qty: {$lt: 55}}, {qty: {$gt: 45}}]}).pretty()