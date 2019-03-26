const express = require('express')
const router = express.Router()
const data = [
    {"id": 1, "first_name": "Pedro", "last_name": "Silva"},
    {"id": 2, "first_name": "Ana", "last_name": "Santos"},
]

//Create
router.post('/', function (req, res) {
    res.status(200).send("Create Action")
})

//Get all
router.get('/', function(req, res) {
    res.status(200).send(data)
})

//Find one by id
router.get('/:id', function(req, res) {
   data.map(d => {
       if (d.id == req.params.id)
        res.status(200).send(d)
   })

   res.status(404).send("NOT FOUND")
})

//Update
router.put('/:id', function(req, res) {
    res.status(200).send("Update")
})

//Delete
router.delete('/:id', function(req, res){
    res.status(200).send("Delete")
})

module.exports = router