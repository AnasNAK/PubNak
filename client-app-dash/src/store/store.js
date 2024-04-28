import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";


const store = configureStore({
    reducer: {
        user: categorySlice,
    }
});

export default store;