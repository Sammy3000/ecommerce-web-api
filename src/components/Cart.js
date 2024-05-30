import {useSelector} from 'react-redux'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const Cart = ()=>{
    const products = useSelector(store=>store.cart)

    const cards = products.map(prod=> (
        <div className='col-md-12'>
          <Card key={prod.id} className='h-100'>
            <div className='text-center'>
              <Card.Img variant="top" src={prod.image} style = {{width:'100px' , height: '125px'}}/>
            </div>
          <Card.Body>
            <Card.Title>{prod.title}</Card.Title>
            <Card.Text>
              $: {prod.price}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
           <Button variant="primary">Add to Cart</Button>
          </Card.Footer>
        </Card>
        </div>
    
      ))

    return(
        <>
      <div className='row'>
        {cards}

      </div>
        </>
    )
}
export default Cart