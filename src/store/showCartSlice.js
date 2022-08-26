import { createSlice } from "@reduxjs/toolkit";

const initialShowCartState =  {showCart: false};
const showCartSlice = createSlice({
    name: 'showCart',
    initialState:  initialShowCartState,
    reducers: {
        toggleCart(state){
            state.showCart = !state.showCart;
        }
    }
});

export const showCartAction = showCartSlice.actions;
export default showCartSlice.reducer;