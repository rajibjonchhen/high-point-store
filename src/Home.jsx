import React, { useEffect } from 'react'

export default function Home() {
    useEffect(()=>{
        console.log("hello home")
      },[])
    return (
    <div>
        Home
    </div>
    )
}
