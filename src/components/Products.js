import React from 'react'
import { useState,useEffect } from 'react'

const Products = () => {
useEffect(()=>{
  //api
  fetch('https://fakestoreapi.com/products')

},[])

  return (
    <div>
        <h1>Product dashboard</h1>
    </div>
  )
}

export default Products