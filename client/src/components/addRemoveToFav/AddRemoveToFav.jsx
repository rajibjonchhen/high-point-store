import React, { useEffect } from "react";
import { addRemoveToFavourite } from "../../state";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import { FavoriteBorderOutlined, FavoriteOutlined } from "@mui/icons-material";

export default function AddRemoveToFav({ item, isFavourite, text = "" }) {
  const dispatch = useDispatch();
  return (
    <Box
      sx={{ color: "red", cursor: "pointer" }}
      onClick={() => dispatch(addRemoveToFavourite(item))}
    >
      {isFavourite ? (
        <Typography sx={{ ml: "5px" }}>
          <FavoriteOutlined />
          {text}
          {/* Remove from wishlist */}
        </Typography>
      ) : (
        <Typography sx={{ ml: "5px" }}>
          <FavoriteBorderOutlined />
          {text}
          {/* Add to wishlist */}
        </Typography>
      )}
    </Box>
  );
}
