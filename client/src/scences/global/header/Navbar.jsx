import React, { useEffect, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ConstRoutes } from "../../../constant/ConstRoutes";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
import { setIsCartOpen } from "../../../state";
import {
  PersonOutlined,
  ShoppingBagOutlined,
  MenuOutlined,
  SearchOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { shades } from "../../../theme";

export default function Navbar() {
  const navigate = useNavigate();
  const dispatch  = useDispatch();
  const cart = useSelector(state => state.cart.cart)
  const [totalItems, setTotalItems] = useState(0)

  useEffect(() => {
  
    const initialValue = 0;
const sumWithInitial = cart.reduce(
  (accumulator, currentValue) => accumulator + currentValue.count,
  initialValue
);

setTotalItems(sumWithInitial);
  },[cart])
  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      position="sticky"
      top="0"
      left="0"
      zIndex="1"
      color="black"
      backgroundColor="rgb(255, 255, 255, 0.95)"
    >
      <Box 
      display = "flex"
      alignItems = "center"
      justifyContent= "space-between"
      margin = "auto"
      width = "80%"
      
      >

        
          <Box 
            color = {shades.secondary[500]}
          sx={{
            '&:hover' : {
              cursor : 'pointer',
            }
          }} onClick={() => navigate(ConstRoutes.home.url())}>
            <h3>HIGH POINT STORE</h3>
          </Box>

        <Box 
        display = "flex"
        alignItems = "center"
        justifyContent= "space-between"
        columnGap = "20px"
        zIndex = '2'
        >
          <form className="d-flex">
            <input
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <IconButton sx={{color:'black'}}>
              <SearchOutlined/>
            </IconButton>
          </form>
            <IconButton sx={{color:'black'}} onClick={() => navigate(ConstRoutes.home.url())}>
              <HomeOutlined/>
            </IconButton>
            <IconButton sx={{color:'black'}}>
              <PersonOutlined/>
            </IconButton>
            <Badge
            badgeContent = {totalItems}
            color = "secondary"
            invisible = {!cart.length}
            sx = {{
              '& .MuiBadge-badge' : {
              rigth : 5,
              top : 5,
              padding : '0 4px',
              height : '14px',
              minHeight : '13px'
              }
            }}
            >
            <IconButton sx={{color:'black'}} onClick={() => dispatch(setIsCartOpen({}))}>
              <ShoppingBagOutlined/>
            </IconButton>
            </Badge>
            <IconButton sx={{color:'black'}}>
              <MenuOutlined/>
            </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
