import {useSelector,useDispatch} from 'react-redux'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const Cart = ()=>{
    const products = useSelector(store=>store.cart)
    const dispatch = useDispatch()
    

    const removeToCart = (id)=>{
       
    }

    const cardRender = products.map(product=> (
        <div className='col-md-12'>
          <Card key={product.id}  className='h-100'>
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
        </div>
    
      ))

    return(
      <div className='row'>
        {cardRender}

      </div>
        
    )
}
export default Cart