var express = require('express')
var server = express()
var port = 3000

server.listen(port, function(){
  console.log("The server is working on port: ", port)
})