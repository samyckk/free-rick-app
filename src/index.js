import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
// import Navbar from './components/Navbar;
import News from './components/News';

const router = createBrowserRouter([
  {
    path: "/",
    element: <News category="general"/>,
  },
  {
    path: "general",
    element: <News category="general"/>,
  },
  {
    path: "sports",
    element: <News category="sports"/>,
  },
  {
    path: "technology",
    element: <News category="technology"/>,
  },
  {
    path: "science",
    element: <News category="science"/>,
  },
  {
    path: "health",
    element: <News category="health"/>,
  },
  {
    path: "business",
    element: <News category="business"/>,
  },
  {
    path: "entertainment",
    element: <News category="entertainment"/>,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>
    <App /></RouterProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
