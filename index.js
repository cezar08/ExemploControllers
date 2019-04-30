var express = require('express')
var app = express()
require("dotenv-safe").load()
var AuthorsController = require("./app/controllers/AuthorsController")
var BooksController = 
require("./app/controllers/BooksController")
var UsersController = require("./app/controllers/UsersController")
var LoginController = require("./app/controllers/LoginController")

app.use("/authors", AuthorsController)
app.use("/books", BooksController)
app.use("/users", UsersController)
app.use("/login", LoginController)

app.listen(3000, function() {
    console.log("Servidor ouvindo na porta 3000!")
})