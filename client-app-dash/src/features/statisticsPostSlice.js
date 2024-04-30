import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const PostStatisticsState = {
    loading: false,
    statistics: [],
    error: "",
    successMessage: "",
};


const statisticsPostSlice = createSlice({
    name: "PostStatistics",
    initialState: PostStatisticsState,
    reducers: {
        fetchStatisticsRequest: (state) => {
            state.loading = true;
            state.error = "";
            state.successMessage = ""
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
} = statisticsPostSlice.actions;


export const getStatistics = () => async (dispatch) => {
    dispatch(fetchStatisticsRequest());
    try {
        const response = await axios.get("http://localhost/api/postStatistics");
        dispatch(fetchStatisticsSuccess(response.data.data));
        console.log(response.data.data);
    } catch (error) {
        dispatch(fetchStatisticsFailure(error.message));
    }
}

export default statisticsPostSlice.reducer;