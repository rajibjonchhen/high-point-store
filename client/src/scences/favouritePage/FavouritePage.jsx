import { Box } from '@mui/material'
import React, { useEffect } from 'react'
import Item from '../../components/productCard/Item'
import { useSelector } from 'react-redux'

export default function FavouritePage() {
  const displayItems = useSelector(state => state.cart.favourites)
  useEffect(() => {
      console.log("🚀 ~ file: FavouritePage.jsx:8 ~ FavouritePage ~ displayItems:", displayItems)
  },[])
    return (
    <Box 
    width = "80%"
    margin = "80px auto"
  >
      <Box
      margin = '0 auto'
      display = 'grid'
      gridTemplateColumns = 'repeat(auto-fill , 200px)'
      justifyContent = 'space-around'
      rowGap = '20px'
      columnGap = '1.33%'
      >
      {displayItems.map((item, index) => <Item key={index} item={item} width = '100px' />)}
        

      </Box>
  </Box>
  )
}
