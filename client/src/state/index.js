import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    isCartOpen : false,
    cart : [],
    items : []
}
export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        setItems : (state, action)=> {
            state.items = action.payload
        },

        addToCart : (state, action) => {
            state.cart = [...state.cart, action.payload.item]
        },
        removeFromCart : (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        incrementCount : (state, action) => {
            state.cart.map((item) => {
                if(item.id === action.payload.id){
                    item.count++;
                }
            }) 
        }
    }

})

export const {setItems} = cartSlice.actions;

export default cartSlice.reducer;