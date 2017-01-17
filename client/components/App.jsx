import React from 'react'

import Header from './Header'
import Content from './Content'
import Categories from './Categories'
import Footer from './Footer'

import Data from '../../public/products'


export default React.createClass({

getInitialState() {
  return {
    categories: Data.categories,
    products: Data.products
  }
},

renderCategories(err, categories) {
  this.setState({
    categories,
    products
  })
},


  render() {
    return (
      <div>
        <Header />
        <Categories categories={this.state.categories} products={this.state.products}/>
        {this.props.children}
        <Footer>2017</Footer>
      </div>
    )
  }
})
