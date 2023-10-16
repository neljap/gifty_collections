import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../features/productApi";
import cartReducer from "../features/cartSlice"

const store = configureStore({
    reducer: {
        [productsApi.reducerPath]: productsApi.reducer, 
        cart: cartReducer
    },
    middleware: (getDefaultMiddleware) => (
        getDefaultMiddleware().concat(productsApi.middleware)
    )
})

export default store;