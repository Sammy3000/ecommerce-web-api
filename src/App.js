import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Products from "./components/Products";


function App() {
  return (
    <div>
    <Products/>
     
    </div>
  );
}

export default App;
