import React, { useEffect, useState } from "react";
import "./itemDetail.scss";
import { Box, IconButton, Typography, Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ShoppingCart } from "@mui/icons-material";

import { addToCart, decrementCount, incrementCount } from "../../state";
import { shades } from "../../theme";
import { ConstRoutes } from "../../constant/ConstRoutes";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ItemDetail() {
  const dispatch  = useDispatch()
  const {itemId} = useParams()  
  const [item, setItem] = useState({})
  const [items, setItems] = useState([])

    useEffect(()=>{
       getItemDetail()
      },[itemId])

    async function getItemDetail(){
      const itemDetail  = await fetch(`http://localhost:1337/api/items/${itemId}?populate=image`,{
        method : "Get"
      })
      const itemDetailJson = await itemDetail.json()
      setItem(itemDetailJson.data)
      console.log("🚀 ~ file: ItemDetail.jsx:29 ~ getProductDetail ~ productDetailJson:", itemDetailJson.data.attributes.image.data.attributes.formats.medium.url, "---", itemId, {})
      
      }

  return (
    item && <Box>
      <Box>
        <img src ={item?.attributes?.image.data.attributes.formats.medium.url} alt=''/>
      </Box>
      <Box>
        <Typography>{item?.attributes?.name}</Typography>
      </Box>
    </Box>
  )
}
