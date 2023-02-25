import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from './styles/global';
import ErrorPage from './routes/ErrorPage';
import Contato from './pages/contact';

// 1- configurando router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "contato",
        element: <Contato/>,
      },
      {
        path: 'sobre-nos',
        element: '#',
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
