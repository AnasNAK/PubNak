import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/features/userSlice";
import categorySlice from "@/features/categorySlice";
import postSlice from "@/features/postSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    category: categorySlice,
    posts: postSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;