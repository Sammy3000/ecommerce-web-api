import { click } from "@testing-library/user-event/dist/click"
import { useState } from "react"

const Cart = ()=>{
    const [count,setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count + 1)
    }

    return(
        <>
        {/* <h2>Cart</h2> */}
       < Button>You have clicked {count}times</Button>
        </>
    )
}
export default Cart