import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Products from "./components/Products";


function App() {
   const router = createBrowserRouter(createRoutesFromElements(
    <Route>
      <Route index element = {<Dashboard/>}></Route>
    </Route>
   ))

  return (
    <div>
    <Products/>
     
    </div>
  );
}

export default App;
