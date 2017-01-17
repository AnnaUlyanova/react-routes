import React from 'react'

import data from '../../public/products'

export default React.createClass({

  getInitialState() {
    return {
      products: data.products
    }
  },

  renderProducts(err, products) {
    this.setState({
      products
    })
  },


    render() {
      return (
        <div>
          {this.state.products.map( product => {
          return (
                  <div>
                  <h1>{product.name}</h1>
                  <img src="{product.image}" alt=""/>
                  <h4>{product.description}</h4>
                  </div>
          )
        } )}
        </div>
      )
    }
  })
