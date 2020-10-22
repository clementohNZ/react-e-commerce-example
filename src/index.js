import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <App/>
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
)
