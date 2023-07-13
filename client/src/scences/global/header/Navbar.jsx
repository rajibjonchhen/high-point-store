import React from 'react'
import  './navbar.scss'
import { Link } from 'react-router-dom'; 
import { ConstRoutes } from '../../../constant/ConstRoutes';
import {useSelector, useDispatch} from "react-redux"
import {Badge, Box, IconButton} from "@mui/material"
import {PersonOutlined, ShoppingBagOutlined, MenuOutlined} from "@mui/icons-material"
import { useNavigate } from 'react-router-dom';
import {shades} from '../../../theme'

export default function Navbar() {

  const navigate  = useNavigate()
  // const dispatch  = useDispatch()
  return (
    <Box 
      display='flex'
      alignItems='center'
      width  = "100%"
    >
      <div>
        <Link  className="nav-link brand"  to={ConstRoutes.home.url()}>HIGH POINT STORE</Link>
      </div>
     
      <div className="justify-content-end flex-grow-1 pe-3">
            <form className="d-flex">
                <input
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <button variant="outline-success">Search</button>
              </form>
                <span className="nav-link" onClick={() => navigate(ConstRoutes.home.url())}>
                  Home
                </span>
                <span className="nav-link" onClick={() => navigate(ConstRoutes.detail.url())}>
                  Detail
                </span>
                <span className="nav-link" onClick={() => navigate(ConstRoutes.checkout.url())}>
                  CheckOut
                </span>
              </div>
      
    </Box>
  );
}
