import React from 'react'

import Home from './Home'
import ProductListing from './ProductListing'
import ProductDetails from './ProductDetails'
import Nav from './Nav'

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        <hr />
        {this.props.children}
        <hr />
      </div>
    )
  }
})
