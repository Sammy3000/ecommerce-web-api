import {useSelector} from 'react-redux'
const Cart = ()=>{
    const cartProduct = useSelector(store=>store.cart)

    return(
        <>
        <h2>Cart</h2>
        </>
    )
}
export default Cart