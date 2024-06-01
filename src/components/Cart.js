import {useSelector,useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { remove } from '../store/cartSlice'

const Cart = ()=>{
    const products = useSelector(store=>store.cart)
    const dispatch = useDispatch()
    

    const removeToCart = (id)=>{
       dispatch(remove(id))
    }

    const cardRender = products.map(product=> (
       
          <Card key={product.id}  className='h-100,col-md-12'>
            <div className='text-center'>
              <Card.Img variant="top" src={product.image} style = {{width:'100px' , height: '125px'}}/>
            </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>
              $: {product.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
           <Button variant="danger" onClick={()=>removeToCart(product.id)}>Remove Item</Button>
          </Card.Footer>
        </Card>
       
    
      ))

    return(
      <div className='row'>
        {cardRender}

      </div>
        
    )
}
export default Cart