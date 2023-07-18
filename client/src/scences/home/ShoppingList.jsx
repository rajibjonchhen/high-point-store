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

    const [value, setValue] = useState('all')

    const handleChange = (event, newValue) => {
      console.log(newValue)
      setValue(newValue)
      if(newValue === 'all'){
        dispatch(setItems([...allProducts]))
      }else{
        dispatch(setItems(items.filter(item => item.attributes.category === newValue)))
      }
    }
    useEffect(() => {
          getItems()
      }, [])


      async function getItems(){
        const allProducts = await fetch("http://localhost:1337/api/items?populate=image",{
          method : "Get"
        })
        const allProductsJson = await allProducts.json()
        dispatch(setItems(allProductsJson.data))
      }
      

      const jeans = items.filter(item => item.attributes.category === "jeans")
      const glasses = items.filter(item => item.attributes.category === "glasses")
      const pants = items.filter(item => item.attributes.category === "pants")
      const tShirt = items.filter(item => item.attributes.category === "t-shirt")
    

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
      tabsIndicatorProps = {{sx:{display : isNonMobile? 'block' : 'none'}}}
      sx = {{m : '25px',
    '& .MuiTabs-flexContainer' :{
      flexWrap : "wrap"
    }}}
      >
        <Tab label='All' value = 'all'></Tab>
        <Tab label='Jeans' value = 'jeans'></Tab>
        <Tab label='pants' value = 'pants'></Tab>
        <Tab label='Glasses' value = 'glasses'></Tab>
        <Tab label='T-shirt' value = 't-shirt'></Tab>

      </Tabs>
      <Box
      margin = '0 auto'
      display = 'grid'
      gridTemplateColumns = 'repeat(auto-fill , 300px)'
      justifyContent = 'space-around'
      rowGap = '20px'
      columnGap = '1.33%'
      >
      {items.map(item => <Item key={item.id} item={item}/>)}
        

      </Box>
    </Box>
  )
}
