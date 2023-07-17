import React, { useEffect, useState } from "react";
import "./productCard.scss";
import { Box, IconButton, Typography, Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { ShoppingCart } from "@mui/icons-material";

import { addToCart, decrementCount, incrementCount } from "../../state";
import { shades } from "../../theme";
import { ConstRoutes } from "../../constant/ConstRoutes";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function Item({ item }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const [width, setWidth] = useState('100px');
  const {
    palette: { neutral },
  } = useTheme();
  const { name, id, price, image, category } = item.attributes;
  const {
      data: {
          attributes: {
              formats: {
                  medium: { url },
                },
              },
            },
          } = image;
          console.log("🚀 ~ file: Item.jsx:34 ~ Item ~ image:" + `http//:localhost:1337${url}`)
          
        
  return (
    <Box width={width}>
      <Box
        position="relative"
        onMouseOver={() => setIsHovered(true)}
        onMouseOut={() => setIsHovered(false)}
      >
        <img
          width="300px"
          height="400px"
          src={`http://localhost:1337${url}`}
          onClick={() => navigate(ConstRoutes.detail.url(id))}
          style={{ cursor: "pointer" }}
        />
        <Box
          display={isHovered ? "block" : "none"}
          position="absolute"
          bottom="10%"
          left="50%"
          right="50%"
          margin-left = "-50%"
          width="100%"
          padding="0 5%"
        >
          <Box display="flex" justifyContent="space-between">
            {/* Amount */}
            <Box
              display="flex"
              alignItems="center"
              backgroundColor={shades.neutral[100]}
            >
               <IconButton
                          onClick={() =>
                            setCount(Math.max(count - 1, 1))
                          }
                        >
                          <RemoveIcon />
                        </IconButton>
                        <Typography>{count}</Typography>
                        <IconButton
                          onClick={() =>
                            setCount(count + 1)
                          }
                        >
                          <AddIcon />
                        </IconButton>
            </Box>
            <Button onClick={() => dispatch(addToCart({item : {...item, count}}))}
            sx = {{ backgroundColor : shades.primary[300], color : 'white'}}
            >
              <ShoppingCart/>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box mt = '3px'>
        <Typography variant="subtitle2">
          {category.replace(/([A-Z])/g, '$1').replace(/^./,(str) => str.toUpperCase()) }
        </Typography>
        <Typography>{name}</Typography>
        <Typography fontWeight = 'bold'>€ {price}</Typography>
      </Box>
    </Box>
  );
}
