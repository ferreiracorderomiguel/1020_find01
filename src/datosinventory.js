/*
Registro del material escolar para el curso 2020/2021
*/
db.inventory.insertMany([
    { objeto: "iPhone 12", stock: 1154, precio: { Euro: 1020, Dollar: 1200 }, almacen: "Murcia" },
    { objeto: "iPad", stock: 1350, precio: { Euro: 425.37, Dollar: 11 }, almacen: "Algodonales" },
    { objeto: "Apple Watch", stock: 300, precio: { Euro: 350, Dollar: 411.11 }, almacen: "Marismillas" },
    { objeto: "Xiaomi MI 10", stock: 15000, precio: { Euro: 900, Dollar: 1057.91 }, almacen: "Jerez" },
    { objeto: "Samsung TAB 7", stock: 23400, precio: { Euro: 750, Dollar: 881.59 }, almacen: "Sevilla" },
    { objeto: "AMD Ryzen 7 3750", stock: 413, precio: { Euro: 450, Dollar: 529.59 }, almacen: "Lebrija" }
 ]);