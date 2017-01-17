import React from 'react'
import ReactDOM from 'react-dom'
import {Router, IndexRoute, Route, hashHistory} from 'react-router'

import App from './components/App'
import Content from './components/Content'
import Home from './components/Home'
import ProductDetails from './components/ProductDetails'
import ProductListing from './components/ProductListing'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    (
      <Router history = {hashHistory}>
        <Route path='/' component={App}>
          <Route component={Content}>
            <IndexRoute component={Home} />
            <Route path= 'details' component={ProductDetails} />
            <Route path= 'products' component={ProductListing} />
          </Route>
        </Route>
      </Router>
    ),

    document.getElementById('app')
  )
})
