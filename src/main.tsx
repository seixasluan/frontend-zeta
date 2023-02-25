import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './organisms/Header'
import Main from './organisms/Main/Main'
import GlobalStyle from './styles/global'
import Contato from './organisms/Contato'

// 1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
  },
  {
    path: "contato",
    element: <Contato/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
    <Main/>
  </React.StrictMode>,
)
