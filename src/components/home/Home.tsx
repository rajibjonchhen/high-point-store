import React, { useEffect } from 'react'
import './home.scss'
import ProductCard from '../productCard/ProductCard'
import Jumbotron from '../jumbotron/Jumbotron'
import { Iproduct } from '../../interface/productInterface'


export default function Home() {
    useEffect(()=>{
        console.log("hello home")
      },[])
      const myProductArr:Iproduct[]= [
          {
              productName:'Cool T-shirt',
              productId:'12345678',
              description:{
                colors:	['red'],
                style:	"free",
                type:	'v-neck',
                material: 'cottom',
                composition: '95% Polyester, 5% Elastane',
                careInstructions:'Machine wash or professional dry'},
                categories:['clothes','summer','cotton'],
              price:'20',
              offer:'',
              brandName:'nike',
              images:[''],
              sizes:['s','m','l','xl'],
              rating:'4.5'
              
          }
      ]
    return (
    <div>
        <Jumbotron/>
       {myProductArr.map((product:Iproduct) => <ProductCard key={product.productId}  product={product}/> )}
    </div>
    )
}
