var express = require('express')
var app = express()
var AuthorsController = require("./app/controllers/AuthorsController")
var BooksController = 
require("./app/controllers/BooksController")
/*
app.get('/', function(req, res) {
    res.send('Olá Mundo!')
})

app.get('/teste', function(req, res) {
    res.status(404).send('Not Found')
})
*/

app.use("/authors", AuthorsController)
app.use("/books", BooksController)

app.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000!")
})