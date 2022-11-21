import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Footer } from './adapters/components/Footer'
import { Header } from './adapters/components/Header'
import { RouterApp } from './core/RouterApp'
import './App.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header />
    <main className='main'>
      <RouterApp />
    </main>
    <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
