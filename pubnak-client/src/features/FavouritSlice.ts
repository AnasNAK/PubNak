import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'

export interface Favorite {
    id: number;
    title: string;
    content: string;
    client: Client;
    category: Category;
    images: Image[];
    created_at:string;
}

interface Category {
    id: number;
    name: string;
}

interface Image {
    id: number;
    path: string;
}

interface ProfileImage {
    path: string;
}

interface Client {
    name: string;
    email: string;
    profile_image: ProfileImage;
}


export interface FavState {
    loading: boolean;
    favorites: Favorite[];
    error: string | null | undefined;
}

const initialState: FavState = {
    loading: false,
    favorites: [],
    error: null,
};

export const fetchMyFav = createAsyncThunk<Favorite[], void, { rejectValue: string }>(
    'favorites/fetchMyFav',
    async (_, { rejectWithValue }) => {
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.get<{ data: Favorite[] }>("http://localhost/api/myFav", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch favorites');
        }
    }
);

export const addToFav = createAsyncThunk<Favorite, number, { rejectValue: string }>(
    'favorites/addToFav',
    async (postId, { rejectWithValue }) => {
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('Token not found');
            }

            const response = await axios.post<any>(
                `http://localhost/api/addFav/${postId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            return response.data.data;
        } catch (error) {
            return rejectWithValue('Failed to add to favorites');
        }
    }
);

const FavouritSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToFav.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addToFav.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload.id);
                const existingIndex = state.favorites.findIndex(fav => fav.id === action.payload.id);

                if (existingIndex !== -1) {
                    state.favorites.splice(existingIndex, 1);
                } else {
                    state.favorites.push(action.payload);
                }
                
            })
            .addCase(addToFav.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(fetchMyFav.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMyFav.fulfilled, (state, action) => {
                state.loading = false;
                state.favorites = action.payload;
            })
            .addCase(fetchMyFav.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default FavouritSlice.reducer;
