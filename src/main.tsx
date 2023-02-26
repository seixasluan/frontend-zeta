import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import ErrorPage from './pages/ErrorPage';
import Contato from './pages/Contato';
import Home from './pages/Home';

// 1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path:  '/',
    errorElement: <ErrorPage/>,
    element: <Home/>,
    children: [
      {
        path: 'contato',
        element: <Contato/>,
      },
      {
        path: 'sobre-nos',
        element: '',
      },
      {
        path: 'solucoes',
        element: '',
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
