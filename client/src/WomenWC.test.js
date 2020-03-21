import React from 'react'
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react'
import { WomenWC } from './WomenWC'
import { GetPlayers } from './components/get'
import { ShowCard } from './components/get/show'
import { PlayerList } from './components'


test('renders WomenWC', () => {
  const div = document.createElement('div')
  ReactDOM.render(<WomenWC />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('renders GetPlayers', () => {
  const div = document.createElement('div')
  ReactDOM.render(<GetPlayers />, div)
  ReactDOM.unmountComponentAtNode(div)
})

test('renders PlayerList', () => {
  const div = document.createElement('div')
  ReactDOM.render(<PlayerList />, div)
  ReactDOM.unmountComponentAtNode(div)
})
