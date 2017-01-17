import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='categories'>
        <ul>
          {this.props.categories.map( category => {
            return (<li key={category.id}><a href="#">{category.name}</a></li>)
          } )}

          {this.props.products.map( product => {
            return (<li key={product.id}><a href="#">{product.name}</a></li>)
          } )}

        </ul>
      </div>
    )
  }
})
