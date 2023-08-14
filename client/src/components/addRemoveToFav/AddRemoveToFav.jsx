import React, { useEffect, useState } from "react";
import { addRemoveToFavourite } from "../../state";
import { useDispatch, useSelector } from "react-redux";
import { Box, Typography } from "@mui/material";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";
import { useParams } from "react-router-dom";

export default function AddRemoveToFav({item}) {
    const ADDTOFAV = "Add to favourite"
    const REMOVEFAV = "Remove from wishlist"
  const dispatch = useDispatch();
  const pathname = window.location.pathname
  const [isFavourite, setIsFavourite] = useState(false)
  const [text, setText] = useState(ADDTOFAV)
  const favourites = useSelector(state => state.cart.favourites)

  useEffect(()=> {
    if(favourites?.findIndex(favourite => favourite?.id === item.id) >= 0){
        setIsFavourite(true)
        setText(REMOVEFAV)
    }
    if(pathname === '/' || pathname === "/favourites"){
        setText("")
    }
  },[])

  const handleFavList = () =>{
    if(isFavourite){
        setIsFavourite(false)
        setText(ADDTOFAV)
    }else {
        setIsFavourite(true)
        setText(REMOVEFAV)
      }
      if(pathname === '/' || pathname === "/favourites"){
          setText("")
      }
  }
  return (
    <Box
      sx={{ color: "red", cursor: "pointer" }}
      onClick={() => {handleFavList(); dispatch(addRemoveToFavourite(item))}}
    >
      <Typography sx={{ ml: "5px" }}>
        {isFavourite ? <FavoriteOutlined /> : <FavoriteBorderOutlined />}
        {text}
      </Typography>
    </Box>
  );
}
