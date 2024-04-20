import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function ProductDetails() {
    const {id}=useParams()
    const [product,setProduct]=useState()
    const navigate=useNavigate()
    useEffect(()=>{
        (async()=>{
            try {
                const res=await fetch(`https://fakestoreapi.com/products/${id}`,{
                    method:'GET',
                    headers:{'content-type':'application/json'}
                })
                const data=await res.json()
                data?setProduct(data):navigate('/not-found-product-details')
            } catch (error) {
                alert('Error Product details fetch ')
            }
        })()
    },[id])
  return (
    <div>ProductDetails</div>
  )
}
