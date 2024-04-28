import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const CategoryState = {
  loading: false,
  categoryList: [],
  error: "",
  successMessage: "",
};

const CategorySlice = createSlice({
  name: "Category",
  initialState: CategoryState,
  reducers: {
    fetchCategoryRequest: (state) => {
      state.loading = true;
      state.error = "";
      state.successMessage = "";
    },
    fetchCategorySuccess: (state, action) => {
      state.loading = false;
      state.categoryList = Array.isArray(action.payload) ? action.payload : [];
    },
    fetchCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addCategoryRequest: (state) => {
      state.loading = true;
      state.error = "";
      state.successMessage = "";
    },
    addCategorySuccess: (state, action) => {
      state.loading = false;
      state.categoryList = [...state.categoryList, action.payload];
      state.successMessage = "Category added successfully";
    },
    addCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateCategoryRequest: (state) => {
      state.loading = true;
      state.error = "";
      state.successMessage = "";
    },
    updateCategorySuccess: (state, action) => {
      state.loading = false;
      state.categoryList = state.categoryList.map((category) =>
        category.id === action.payload.id ? action.payload : category
      );
      state.successMessage = "Category updated successfully";
    },
    updateCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteCategoryRequest: (state) => {
      state.loading = true;
      state.error = "";
      state.successMessage = "";
    },
    deleteCategorySuccess: (state, action) => {
      state.loading = false;
      state.categoryList = state.categoryList.filter(
        (category) => category.id !== action.payload
      );
      state.successMessage = "Category deleted successfully";
    },
    deleteCategoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCategoryRequest,
  fetchCategorySuccess,
  fetchCategoryFailure,
  addCategoryRequest,
  addCategorySuccess,
  addCategoryFailure,
  updateCategoryRequest,
  updateCategorySuccess,
  updateCategoryFailure,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryFailure,
} = CategorySlice.actions;

export const fetchCategory = () => async (dispatch) => {
  dispatch(fetchCategoryRequest());
  try {
    const response = await axios.get("http://localhost/api/category");
    dispatch(fetchCategorySuccess(response.data.data));
    console.log(response.data);
  } catch (error) {
    dispatch(fetchCategoryFailure(error.message));
  }
};

export const addCategory = (categoryData) => async (dispatch) => {
  dispatch(addCategoryRequest());
  try {
    const response = await axios.post("http://localhost/api/category", categoryData);
    dispatch(addCategorySuccess(response.data));
    dispatch(fetchCategory());
  } catch (error) {
    dispatch(addCategoryFailure(error.message));
  }
};

export const updateCategory = (categoryData) => async (dispatch) => {
  dispatch(updateCategoryRequest());
  try {
    const response = await axios.put(`http://localhost/api/category/${categoryData.id}`, categoryData);
    dispatch(updateCategorySuccess(response.data));
    dispatch(fetchCategory());
  } catch (error) {
    dispatch(updateCategoryFailure(error.message));
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  dispatch(deleteCategoryRequest());
  try {
    await axios.delete(`http://localhost/api/category/${categoryId}`);
    dispatch(deleteCategorySuccess(categoryId));
    dispatch(fetchCategory());
  } catch (error) {
    dispatch(deleteCategoryFailure(error.message));
  }
};

export default CategorySlice.reducer;