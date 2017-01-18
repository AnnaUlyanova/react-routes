import test from 'tape'
import React from 'react'
import { shallow, mount, render } from 'enzyme'
import request from 'superagent'

import App from '../client/components/App'
import Categories from '../client/components/Categories'
import Nav from '../client/components/Nav'
import api from '../client/api'

test('<App />', t => {
  const expected = '<Header /><Categories /><Footer />'
  const wrapper = shallow(<App />)
  t.equal(wrapper.text(), expected)
  t.end()
})

test('<Categories />', t => {
  const expected = 2
  const categories = [{
    id: 1,
    name: 'Animals'
  }]
  const products = [{
    id: 1,
    categoryId: 1,
    name: 'batman',
    image: 'www.batman.com',
    description: 'cool toy'
  }]
  const wrapper = shallow(<Categories categories={categories} products={products}/>)
  const actual = wrapper.find('li').length
  t.equal(actual, expected)
  t.end()
})

test('<Nav />', t => {
  const expected = 3
  const wrapper = shallow(<Nav />)
  const actual = wrapper.find('li').length
  t.equal(actual, expected)
  t.end()
})

test('<App /> includes a <Header /> component', t => {
  const expected = true
  const wrapper = render (<App />)

  const actual = wrapper.find('div.header').length > 0

  t.equal(actual, expected)
  t.end()
})

test.only('getCategories return 13 objects', t => {
  //Arrange
  const expected = 13

  //Act
  request
    .get('http://localhost:3000/products')
    .end(function (err,res) {
      const actual = res.body.categories.length
      t.equal(actual, expected)
      t.error(err)
      t.end()
    })
})
