/*
Todos los documentos de la colección inventory
*/
db.inventory.find( {} )

/*
Todos los documentos de la colección inventory presentados con otra estructura
*/
db.inventory.find( {} ).pretty()

/*
El número de documentos de la colección inventory
*/
db.inventory.find( {} ).count()

/*
Los que tienen qty = 75 y status = "D"
*/
db.inventory.find({
    qty: 75,
    status: "D"
})

/*

*/
