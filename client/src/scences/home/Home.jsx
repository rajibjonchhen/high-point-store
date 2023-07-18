import React, { useEffect } from 'react'
import './home.scss'
import MainCarousel from './MainCarousel'
import Item from '../../components/productCard/Item'
import ShoppingList from './ShoppingList'


export default function Home() {
    useEffect(()=>{
      },[])

      const sampleProduct = {
        name:'Cool T-shirt',
        id:'12345678',
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
        images:['https://picsum.photos/150/100'],
        sizes:['s','m','l','xl'],
        rating:'4.5'
        
    }
      const myProductArr= [
      ]
    return (
    <div className = "home">
        <MainCarousel/>    
        <ShoppingList/>
    </div>
    )
}
