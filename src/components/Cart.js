import { useState } from "react"

const Cart = ()=>{
    const [count,setCount] = useState(0)
    const handleCount = ()=>{
        setCount(count + 1)
    }

    return(
        <>
        {/* <h2>Cart</h2> */}
        <div>
            <button onClick={handleCount}>You have clicked {count} times</button>
        </div>
     
        </>
    )
}
export default Cart