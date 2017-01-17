var path = require('path')

var data = require('../public/products')

module.exports = {
  getProducts: getProducts
}

function getProducts (req, res) {
  res.json(data)
}
