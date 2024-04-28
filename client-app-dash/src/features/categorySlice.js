import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const CategoryState = {
  updateState: false,
  loading: false,
  categoryList: [],
  error: "",
  response: "",
};

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async () => {
    try {
      const response = await axios.get("http://localhost/api/category");
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch categories");
    }
  }
);

const CategorySlice = createSlice({
  name: "Category",
  initialState: CategoryState,
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categoryList = action.payload; 
      })
      .addCase(fetchCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export default CategorySlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = CategorySlice.actions;
