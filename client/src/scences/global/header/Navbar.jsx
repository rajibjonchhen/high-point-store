import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { ConstRoutes } from "../../../constant/ConstRoutes";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Box, IconButton } from "@mui/material";
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
  // const dispatch  = useDispatch()
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
            <IconButton sx={{color:'black'}} onClick={() => navigate(ConstRoutes.checkout.url())}>
              <ShoppingBagOutlined/>
            </IconButton>
            <IconButton sx={{color:'black'}}>
              <MenuOutlined/>
            </IconButton>
        </Box>
      </Box>
    </Box>
  );
}
