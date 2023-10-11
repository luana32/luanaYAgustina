const { v4: uuidv4 } = require('uuid');
let peliculas= [
    {
        id: uuidv4(),
        rating: "8",
        awards: 1,
        length: 500,
        price: 300,
        genre: "Aventuras"
    },
    {
        id:uuidv4(),
        rating: "10",
        awards: 4,
        length: 600,
        price: 100,
        genre: "Animacion"
    },
    {
        id: uuidv4(),
        rating: "10",
        awards: 6,
        length: 1000,
        price: 400,
        genre: "Suspenso"
    }
]
module.exports=peliculas;