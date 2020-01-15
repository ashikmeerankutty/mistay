import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store'
import Search from './components/search'

const App = () => (<Provider store={configureStore()}><Search /></Provider>)

export default App
