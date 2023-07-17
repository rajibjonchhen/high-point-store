import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../components/productCard/Item'
import { setItems } from '../../state'
import { useNavigate } from 'react-router-dom'
import { Box, useMediaQuery } from '@mui/material'

export default function ShoppingList() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const [value, setValue] = useState()

    const handleChange = (event, newValue) => {
      setValue(newValue)
    }
      useEffect(() => {
          getItems()
          console.log("🚀 ~ file: ShoppingList.jsx:19 ~ useEffect ~ getItems:" + 'getItems')
      }, [])

      const jeans = items.filter(item => item.attributes.category === "jeans")
      const glasses = items.filter(item => item.attributes.category === "glasses")
      const pants = items.filter(item => item.attributes.category === "pants")
      const tShirt = items.filter(item => item.attributes.category === "t-shirt")

      async function getItems(){
        const allProducts = await fetch("http://localhost:1337/api/items?populate=image",{
          method : "Get"
        })
        const allProductsJson = await allProducts.json()
        dispatch(setItems(allProductsJson.data))
      }
    

  return (
    <Box 
    display = 'flex'
    flex-wrap = "wrap"
    justifyContent= 'space-between'
    width= "100%"
    >
      {items.map(item => <Item key={item.id} item={item}/>)}
    </Box>
  )
}