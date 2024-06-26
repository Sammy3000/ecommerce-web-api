import React from 'react'
import { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import { useDispatch} from 'react-redux'
import { add } from '../store/cartSlice'


const Products = () => {
  const dispatch = useDispatch();
  const[product,getProduct]=useState([])

useEffect(()=>{
  //api
  fetch('https://fakestoreapi.com/products')
  .then(data=>data.json())
  .then(result=>getProduct(result))

},[])

const addToCart = (products)=>{
  //dispatch an add action
  dispatch(add(products))
}

  const cards = product.map(prod=> (
    
      <Card className='col-md-3,h-100'key={prod.id} >
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
       <Button variant="primary" onClick={()=>addToCart(product)}>Add to Cart</Button>
      </Card.Footer>
    </Card>
  

  ))

  return (
    <>
    <div className='row'>
      {cards}
    </div>
    </>
  )
}

export default Products