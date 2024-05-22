 import { Outlet } from "react-router-dom"
import NavbarPanel from "./NavbarPanel"
import { Provider } from "react-redux"
import Store from "../store/Store"
 
 const Rootlayout = ()=>{
   return(
      <>
      <NavbarPanel/>
      <main>
         <Outlet/>
      </main>
     </>
   )
   
 }

 export default Rootlayout


 