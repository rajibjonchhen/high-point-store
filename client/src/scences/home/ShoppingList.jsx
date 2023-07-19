import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Item from '../../components/productCard/Item'
import { setItems } from '../../state'
import { useNavigate } from 'react-router-dom'
import { Box, Tab, Tabs, useMediaQuery } from '@mui/material'

export default function ShoppingList() {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)
    const isNonMobile = useMediaQuery('(min-width:600px)')

    const [value, setValue] = useState('')
    const [displayItems, setDisplayItems] = useState([])

    const handleChange = (event, newValue) => {
      console.log(newValue)
      setValue(newValue)
    }
    useEffect(() => {
          getItems("")
      }, [])

    useEffect(() => {
      getItems(value)
    }, [value])

      async function getItems(filter){
        console.log("🚀 ~ file: ShoppingList.jsx:29 ~ getItems ~ filter:", filter)
        const allProducts = await fetch("http://localhost:1337/api/items?populate=image",{
          method : "Get"
        })
        const allProductsJson = await allProducts.json()
        dispatch(setItems(allProductsJson))
        const filteredItems = allProductsJson.data.filter(item => item.attributes.category.includes(filter))
        console.log("🚀 ~ file: ShoppingList.jsx:34 ~ getItems ~ filteredItems:", filteredItems)
        setDisplayItems(filteredItems)
      }
    

  return (
    <Box 
      width = "80%"
      margin = "80px auto"
    >
      <Tabs
      textColor = 'primary'
      indicatorColor = 'primary'
      value = {value}
      onChange = {handleChange}
      centered
      TabIndicatorProps = {{sx:{display : isNonMobile? 'block' : 'none'}}}
      sx = {{m : '25px',
    '& .MuiTabs-flexContainer' :{
      flexWrap : "wrap"
    }}}
      >
        <Tab label='All' value = ''></Tab>
        <Tab label='top seller' value = 'top seller'></Tab>
        <Tab label='new arrival' value = 'new arrival'></Tab>
        <Tab label='trending' value = 'trending'></Tab>

      </Tabs>
      <Box
      margin = '0 auto'
      display = 'grid'
      gridTemplateColumns = 'repeat(auto-fill , 300px)'
      justifyContent = 'space-around'
      rowGap = '20px'
      columnGap = '1.33%'
      >
      {displayItems.map((item, index) => <Item key={index} item={item}/>)}
        

      </Box>
    </Box>
  )
}
