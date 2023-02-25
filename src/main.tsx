import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './organisms/Header'
import Main from './organisms/Main/Main'
import GlobalStyle from './styles/global'
import Contato from './organisms/Contato'
import Footer from './organisms/Footer'

// 1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header/>
  },
  {
    path: "contato",
    element: <Contato/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <GlobalStyle/>
    <Main/>
    <Footer/>
  </React.StrictMode>,
)
