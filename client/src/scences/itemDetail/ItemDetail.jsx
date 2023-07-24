import React, { useEffect, useState } from "react";
import "./itemDetail.scss";
import {
  Box,
  IconButton,
  Typography,
  Button,
  useTheme,
  getListItemSecondaryActionClassesUtilityClass,
  Tabs,
  Tab
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { FavoriteBorderOutlined, FavoriteOutlined, ShoppingCart, ShoppingCartOutlined } from "@mui/icons-material";

import { addToCart, decrementCount, incrementCount } from "../../state";
import { shades } from "../../theme";
import { ConstRoutes } from "../../constant/ConstRoutes";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function ItemDetail() {
  const dispatch = useDispatch();
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  const [relItems, setRelItems] = useState([]);
  const [count, setCount] = useState(1)
  const [isFavourite, setIsFavourite] = useState(false)
  const [tabValue, setTabValue] = useState("description")

  useEffect(() => {
    getItemDetail();
    getItems();
  }, [itemId]);

  async function getItemDetail() {
    const itemDetail = await fetch(
      `http://localhost:1337/api/items/${itemId}?populate=image`,
      {
        method: "Get",
      }
    );
    const itemDetailJson = await itemDetail.json();
    setItem(itemDetailJson.data);
    console.log(
      "🚀 ~ file: ItemDetail.jsx:29 ~ getProductDetail ~ productDetailJson:",
      itemDetailJson.data.attributes.image.data.attributes.formats.medium.url,
      "---",
      itemId,
      {}
    );
  }

  const handleTab = (e, newValue) => {
    setTabValue(newValue)
  }
  async function getItems() {
    console.log("🚀 ~ file: ShoppingList.jsx:29 ~ getItems ~ filter:");
    const allProducts = await fetch(
      "http://localhost:1337/api/items?populate=image",
      {
        method: "Get",
      }
    );
    const allProductsJson = await allProducts.json();

    const filteredItems = allProductsJson.data.filter(
      (item) => item.id !== itemId
    );
    console.log(
      "🚀 ~ file: ShoppingList.jsx:34 ~ getItems ~ filteredItems:",
      filteredItems
    );
    setRelItems(filteredItems);
  }

  return (
    item && (
      <Box width="80%" m="80px auto">
        {/* image and the description */}
        <Box display="flex" flexWrap="wrap" columnGap="40px">
          <Box flex="1 1 40%" mb="40px">
            <img
              src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`}
              height="100%"
              width="100%"
              alt={item.name}
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Box flex="1 1 50%" mb="40px">
            <Box display="flex" justifyContent="space-between">
              <Box>Home / Item</Box>
              <Box>Prev / Next</Box>
            </Box>
            <Box m="65px 0 25px 0">
              <Typography variant="h3">{item?.attributes?.name}</Typography>
              <Typography>€ {item?.attributes?.price}</Typography>
              <Typography sx={{ mt: "20px" }}>
                € {item?.attributes?.longDescription}
              </Typography>
            </Box>
            <Box display = "flex" alignItems = "center" minHeight="50px">
              <Box
                display = "flex"
                alignItems = "center"
                border={`1.5px solid ${shades.neutral[300]}`}
                mr="20px"
                p="2px 5px"
              >
                <IconButton onClick={() => setCount(Math.max(count - 1, 1))}>
                  <RemoveIcon />
                </IconButton>
                <Typography sx = {{p : '0 5px'}}>{count}</Typography>
                <IconButton onClick={() => setCount(count + 1)}>
                  <AddIcon />
                </IconButton>
              </Box>
              <Button 
              onClick={() => dispatch(addToCart({item : {...item, count}}))}
              sx = {{
                backgroundColor : '#222222',
                color : 'white',
                borderRadius : 0,
                minWidth : '150px',
                padding : '10px 40px'
              }}
              >Add to cart  <ShoppingCartOutlined/></Button>
            </Box>
            <Box>
              <Box m = '20px 0 5px 0'  display = 'flex' sx={{cursor : 'pointer'}} onClick={() => setIsFavourite(!isFavourite)}>
                <Box sx={{color : 'red'}} >
                  {isFavourite? 
                <Typography sx = {{ml : '5px'}}>
                  <FavoriteOutlined />
                    Remove from wishlist
                </Typography>
                  :<Typography sx = {{ml : '5px'}}>
                  <FavoriteBorderOutlined />
                  Add to wishlist
                </Typography>
                  }
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* information and description */}
      <Box m = '20px 0'>
        <Tabs value = {tabValue} onChange={handleTab}>
          <Tab label = 'Description' value = 'description'/>
          <Tab label =  'Reviews' value = 'reviews' />
        </Tabs>
      </Box>

      <Box display= 'flex' flexWrap = 'wrap' gap = '15px'>
        {tabValue === 'reviews'? <div>reviews</div>
        : <div>{item?.attributes?.longDescription}</div>
        }

      </Box>

      </Box>
    )
  );
}
