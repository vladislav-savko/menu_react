import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import Menu from './components/Menu'
import Place from './components/Place'
import Soup from './components/Soup'
import ColdDrinks from './components/ColdDrinks'
import Tea from './components/Tea'
import Coffee from './components/Coffee'
import Summer from './components/Summer'
import Dessert from './components/Dessert'

const App = () => {
  const location = useLocation()
  const parseQuery: { page?: string } = queryString.parse(location.search)

  console.log(parseQuery.page)

  switch (parseQuery.page) {
    case '0':
      return <Place />
    case '1':
      return <Soup />
    case '2':
      return <ColdDrinks />
    case '3':
      return <Tea />
    case '4':
      return <Coffee />
    case '5':
      return <Summer />
    case '6':
      return <Dessert />
    default:
      return <Menu />
  }
}

export default App
