import React, { useEffect } from 'react'
import './home.scss'

export default function Home() {
    useEffect(()=>{
        console.log("hello home")
      },[])
    return (
    <div>
        home
    </div>
    )
}
