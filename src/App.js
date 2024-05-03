import 'bootstrap/dist/css/bootstrap.min.css'
import React from "react";
import './App.css';
import { createBrowserRouter,createRoutesFromElements,RouterProvider, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Cart from './components/Cart';
import Products from "./components/Products";
import Rootlayout from './components/Rootlayout';


function App() {
   const router = createBrowserRouter(createRoutesFromElements(
    <Route path = '/' element = {<Rootlayout/>}>
      <Route index element = {<Dashboard/>}></Route>
      <Route path = '/cart' element = {<Cart/>}></Route>
    </Route>
   ))

  return (
    <div>
    {/* <Products/> */}
    <RouterProvider router={router}/>
     
    </div>
  );
}

export default App;
