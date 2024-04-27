import React from 'react'
import { useState,useEffect } from 'react'

const Products = () => {
  const[product,getProduct]=useState([])
useEffect(()=>{
  //api
  fetch('https://fakestoreapi.com/products')
  .then(data=>data.json)
  .then(result=>getProduct(result))

},[])

  return (
    <div>
        <h1>Product dashboard</h1>
    </div>
  )
}

export default Products