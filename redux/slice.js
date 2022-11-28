import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems : [],
}

const CartSlice = createSlice({
    name : "Cart",
    initialState : initialState,
    reducers : {
        updateItemsInCart(state,action){
            console.log("-----------",action.payload);
            if(action.payload.checkboxValue){
                state.cartItems.push(action.payload.food)
            }else{
                state.cartItems = state.cartItems.filter(item => item.title !== action.payload.food.title)
            }
        },
    }
})



export const {updateItemsInCart} = CartSlice.actions;
export default CartSlice.reducer;