import React from 'react'
import { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'
import {Button} from 'react-bootstrap'

const Products = () => {
  const[product,getProduct]=useState([])
useEffect(()=>{
  //api
  fetch('https://fakestoreapi.com/products')
  .then(data=>data.json())
  .then(result=>getProduct(result))

},[])

  const cards = product.map(prod=> (
    <div className='col-md-3'>
      <Card key={prod.id} className='h-100'>
        <div className='text-center'>
          <Card.Img variant="top" src={prod.image} style = {{width:'100px' , height: '125px'}}/>
        </div>
      <Card.Body>
        <Card.Title>{prod.title}</Card.Title>
        <Card.Text>
          $: {prod.price}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>

    </div>

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