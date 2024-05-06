import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Category {
    id: number;
    name: string;
}

interface CategoryState {
    loading: boolean;
    categoryList: Category[];
    error: string | null | undefined;
    successMessage: string;
}

const initialState: CategoryState = {
    loading: false,
    categoryList: [],
    error: null,
    successMessage: "",
};

export const fetchCategories = createAsyncThunk<Category[], void, { rejectValue: string }>(
    'categories/fetchCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.get<{ data: Category[] }>("http://localhost/api/category");
            return response.data.data; 
        } catch (error) {
            return rejectWithValue('Failed to fetch categories');
        }
    }
);

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCategories.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchCategories.fulfilled, (state, action) => {
                state.loading = false;
                state.categoryList = action.payload;
            })
            .addCase(fetchCategories.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default categorySlice.reducer;
