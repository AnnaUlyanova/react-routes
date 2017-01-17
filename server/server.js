var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

var routes = require('./routes')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors())

module.exports = server

server.use('/products', routes.getProducts)
