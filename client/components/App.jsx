import React from 'react'

import Header from './Header'
import Content from './Content'
import Categories from './Categories'
import Footer from './Footer'

import data from '../../public/products'


export default React.createClass({

getInitialState() {
  return {
    categories: data.categories,
    products: data.products
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
