 import { Outlet } from "react-router-dom"
import NavbarPanel from "./NavbarPanel"
 
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


 