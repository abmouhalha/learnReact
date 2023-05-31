import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import LoginPage from "./components/LoginPage";
import FetchShips from "./components/FetchShips";
import './index.css';

const router = createBrowserRouter([
  { path: '/Batelship', element: <App /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/fetch', element: <FetchShips /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <FetchShips /> {/* Déplacez FetchShips ici */}
      <App />
      <LoginPage />
    </RouterProvider>
  </React.StrictMode>
);
