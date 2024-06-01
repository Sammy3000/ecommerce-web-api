import { useSelector, useDispatch } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { remove } from '../store/cartSlice';

const Cart = () => {
  const products = useSelector((store) => store.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };

  const cardRender = products.map(({ id, image, title, price }) => (
    <div key={id} className="col-md-12 mb-4"> {/* Added key here */}
      <Card className="h-100">
        <div className="text-center">
          <Card.Img variant="top" src={image} style={{ width: '100px', height: '125px' }} />
        </div>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            $: {price}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger" onClick={() => removeFromCart(id)}>Remove Item</Button>
        </Card.Footer>
      </Card>
    </div>
  ));

  return (
    <div className="row">
      {cardRender}
    </div>
  );
};

export default Cart;
