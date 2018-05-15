import React, { Component } from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

import Info from './Info'
import UserAgent from './UserAgent'
import reducers from './reducers/index'
import indexSaga from './sagas/index'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(indexSaga)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Info />
          <UserAgent />
        </div>
      </Provider>
    )
  }
}

export default App
