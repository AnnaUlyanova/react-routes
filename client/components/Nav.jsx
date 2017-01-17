import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className='nav'>
        <li><Link to ='/'>Home</Link></li>
        <li><Link to ='/products'>Products</Link></li>
        <li><Link to ='/details'>Product Details</Link></li>
      </div>
    )
  }
})
