import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/features/userSlice";
import categorySlice from "@/features/categorySlice";
import postSlice from "@/features/postSlice";
import postsListSlice from "@/features/postListSlice";
import influencerSlice from "@/features/influencerSlice";
import FavouritSlice from "@/features/FavouritSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    category: categorySlice,
    posts: postSlice,
    postsList: postsListSlice,
    influencers: influencerSlice,
    favorites: FavouritSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;