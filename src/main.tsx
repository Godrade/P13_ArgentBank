import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './adapters/components/Footer'
import { Header } from './adapters/components/Header'
import { RouterApp } from './corelogic/RouterApp'
import './App.scss'

import { initReduxStore } from './corelogic/store/reduxStore'
import { LoginGateway } from './corelogic/gateways/login'

const store = initReduxStore({LoginGateway});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
      <Header />
        <RouterApp />
      <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
