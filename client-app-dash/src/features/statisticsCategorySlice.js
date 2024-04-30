import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'


const CategoryStatisticsState = {
    loading: false,
    statistics: [],
    error: "",
};

const categoryStatisticsSlice = createSlice({
    name: "CategoryStatistics",
    initialState: CategoryStatisticsState,
    reducers: {
        fetchStatisticsRequest: (state) => {
            state.loading = true;
            state.error = "";
        },
        fetchStatisticsSuccess: (state, action) => {
            state.loading = false;
            state.statistics = Array.isArray(action.payload) ? action.payload : [];
        },
        fetchStatisticsFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const {
    fetchStatisticsRequest,
    fetchStatisticsSuccess,
    fetchStatisticsFailure
} = categoryStatisticsSlice.actions;

export const getCategoryStatistics = () => async (dispatch) => {
    dispatch(fetchStatisticsRequest());
    try {
        const response = await axios.get("http://localhost/api/CatStatistics");
        dispatch(fetchStatisticsSuccess(response.data.data));
    } catch (error) {
        dispatch(fetchStatisticsFailure(error.message));
    }
};

export default categoryStatisticsSlice.reducer;
