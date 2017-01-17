import React from 'react'

import Header from './Header'
import Content from './Content'
import Categories from './Categories'
import Footer from './Footer'

import api from '../api'


export default React.createClass({

getInitialState() {
  return {
    categories: [],
    products: []
  }
},

componentDidMount() {
  api.getCategories(this.renderCategories)
  api.getProducts(this.renderProducts)
},

renderProducts(err, products) {
  this.setState({
    products
  })
},

renderCategories(err, categories) {
  this.setState({
    categories
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
