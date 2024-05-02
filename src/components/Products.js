import React from 'react'
import { useState,useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Button from 'react-bootstrap'

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
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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