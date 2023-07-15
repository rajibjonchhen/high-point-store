import React, { useEffect } from 'react'
import './home.scss'
import Jumbotron from '../../components/jumbotron/Jumbotron'
import Item from '../../components/productCard/Item'


export default function Home() {
    useEffect(()=>{
        console.log("hello home")
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
    <div>

        <Jumbotron/>    
        <div className='d-flex gap-3'>
            
        {myProductArr.map((item) => <Item  key={item.id}  item={item}/> )}
        </div>
    </div>
    )
}
