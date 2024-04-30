import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../features/categorySlice";
import statisticsPostSlice from "../features/statisticsPostSlice";
import categoryStatisticsSlice from "../features/statisticsCategorySlice";
import usersSlice from "../features/usersSlice";
import postSlice from "../features/postSlice";
import authSlice from "../features/authSlice";

const store = configureStore({
    reducer: {
        category: categorySlice,
        PostStatistics: statisticsPostSlice,
        CategoryStatistics: categoryStatisticsSlice,
        users: usersSlice,
        Post: postSlice,
        user: authSlice,
    }
});

export default store;