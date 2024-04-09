import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import News from "./components/News";

const router = createBrowserRouter([
  {
    path: "/",
    element: <News category="general" />,
  },
  {
    path: "/Rick-News",
    element: <News category="general" />,
  },
  {
    path: "general",
    element: <News category="general" />,
  },
  {
    path: "sports",
    element: <News category="sports" />,
  },
  {
    path: "technology",
    element: <News category="technology" />,
  },
  {
    path: "science",
    element: <News category="science" />,
  },
  {
    path: "health",
    element: <News category="health" />,
  },
  {
    path: "business",
    element: <News category="business" />,
  },
  {
    path: "entertainment",
    element: <News category="entertainment" />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
