import React, { useEffect } from 'react'
import './productDetail.scss'
import { useParams } from 'react-router-dom'

export default function Detail() {
  const param = useParams()  


    useEffect(()=>{
       const productId = param.id
       console.log(productId)
      },[])
  return (
    <div>Detail</div>
  )
}
