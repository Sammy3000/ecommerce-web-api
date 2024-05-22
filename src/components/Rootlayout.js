 import { Outlet } from "react-router-dom"
import NavbarPanel from "./NavbarPanel"
import { Provider } from "react-redux"
 
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


 