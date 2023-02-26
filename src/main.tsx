import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import ErrorPage from './pages/ErrorPage';
import Contato from './organisms/Contato/Contato';
import Home from './pages/Home';
import Solucoes from './organisms/Solucoes/Solucoes';

// 1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import SobreNos from './pages/SobreNos';

const router = createBrowserRouter([
  {
    path:  '/',
    errorElement: <ErrorPage />,
    element: <Home />,
    children: [
      {
        path: 'contato',
        element: <Contato />,
      },
      {
        path: 'solucoes',
        element: <Solucoes />,
      },
    ]
  },
  {
    path: 'quem-somos',
    element: <SobreNos />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);
