import React, { useEffect } from 'react'
import './home.scss'
import ProductCard from '../productCard/ProductCard'

export default function Home() {
    useEffect(()=>{
        console.log("hello home")
      },[])
    return (
    <div>
       {['', ''].map((product) => <ProductCard product= {product} /> )}
    </div>
    )
}
