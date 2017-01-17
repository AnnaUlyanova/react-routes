var request = require('superagent')

var url = "http://localhost:3000/products"

module.exports = {
  getProducts: getProducts,
  getCategories: getCategories
}

function getProducts (callback) {
  request.get(url)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body.products)
      }
    })
}

function getCategories (callback) {
  request.get(url)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body.categories)
      }
    })
}
