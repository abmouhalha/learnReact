import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import LoginPage from "./components/LoginPage";
import './index.css';

const router = createBrowserRouter([
  { path: '/Batelship', element: <App /> },
  { path: '/login', element: <LoginPage /> },


]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
      <LoginPage/>
    </RouterProvider>
  </React.StrictMode>
);
