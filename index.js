var express = require('express')
var bodyParser = require('body-parser')
var server = express()
var port = 3000
var people = [{
  name: 'Luke Skywalker',
}, {
  name: 'Obi-Wan Konobi'
}]

server.use(bodyParser.json())

server.get('/', function (req, res, next) {
  res.send(200, 'Hello I hear your.....')
})

server.get('/banana', function (req, res, next) {
  res.send('here is your banana')
})

server.get('/people/:id', function (req, res, next) {
  var id = req.params.id
  res.send(people[id])
})

server.get('/people', function (req, res, next) {
  res.send(people)
})

server.post('/people', function (req, res, next) {
  var newPerson = req.body
  if (newPerson.name) {
    people.push(newPerson)
    res.send('Okay')
  }
})

server.listen(port, function () {
  console.log("The server is working on port: ", port)
})