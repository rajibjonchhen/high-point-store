import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isCartOpen: false,
  cart: [],
  items: [],
  favourites : []
};
export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    addRemoveToFavourite : (state, action) => {
      
      const reqIndex = state.favourites.findIndex(item => item.id === action.payload.id)
      if(reqIndex < 0){
        state.favourites = [...state.favourites, action.payload]
      }else {
        state.favourites = state.favourites.filter((item, index) => reqIndex !== index)
      }
      console.log("favourites --",state.favourites)
    },
    addToCart: (state, action) => {
      const index = state.cart.findIndex(item => item.id === action.payload.item.id)
      if(index > -1){ 
        state.cart[index] = {...state.cart[index], count :state.cart[index].count + action.payload.item.count}
      }else {
        state.cart = [...state.cart, action.payload.item];
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },
    incrementCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          item.count++;
        }
        return item;
      });
    },
    decrementCount: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload.id && item.count > 1) {
          item.count--;
        }
        return item;
      });
    },
    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});

export const {
  setItems,
  addToCart,
  removeFromCart,
  addRemoveToFavourite,
  incrementCount,
  decrementCount,
  setIsCartOpen,
} = cartSlice.actions;

export default cartSlice.reducer;
