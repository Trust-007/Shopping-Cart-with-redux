import { configureStore } from "@reduxjs/toolkit";
import showCartSlice from "./showCartSlice";
import cartLogicSlice from "./cartLogicSlice";

const store = configureStore({
    reducer: {
        toggleCart: showCartSlice,
        cartLogic: cartLogicSlice
    }
})


export default store;