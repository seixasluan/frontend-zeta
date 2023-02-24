import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './organisms/Header'
import GlobalStyle from './styles/global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <Header/>
  </React.StrictMode>,
)
