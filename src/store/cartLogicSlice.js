import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {cart: [],quantity:0};
const cartLogicSlice = createSlice({
    name: 'cartLogic',
    initialState:cartInitialState,
    reducers: {
       addItem(state,action){
          const newItem = action.payload;
          const existingItem = state.cart.find(item => item.id === newItem.id);
          state.quantity++
          if(!existingItem){
            state.cart.push({
              id: newItem.id,
              title: newItem.title,
              price: newItem.price,
              total: newItem.price,
              itemQuantity: 1, 
            })
          }else{
            existingItem.itemQuantity++
            existingItem.total = existingItem.total + newItem.price
          }
        },
       removeItem(state,action){
          const id = action.payload;
          const existingItem = state.cart.find(item => id === item.id );
          state.quantity--;
          if(existingItem.itemQuantity === 1){
            state.cart = state.cart.filter(item => item.id !== id);
          }else{
            existingItem.itemQuantity--
            existingItem.total = existingItem.total - existingItem.price;
          }
       }
          
       }
    
})

export const cartLogicAction = cartLogicSlice.actions;
export default cartLogicSlice.reducer;