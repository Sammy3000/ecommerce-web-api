import { useState } from "react"

const Cart = ()=>{
    const [count,setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count + 1)
    }

    return(
        <>
        <h2>Cart</h2>
        </>
    )
}
export default Cart