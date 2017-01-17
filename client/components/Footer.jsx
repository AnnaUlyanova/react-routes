import React from 'react'

export default React.createClass({
  render() {
    return (
      <div className='footer'>
        <p>&copy; {this.props.children} EDA</p>
      </div>
    )
  }
})
