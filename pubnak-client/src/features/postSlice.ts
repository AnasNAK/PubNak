import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "js-cookie"
import { Post, Category } from '@/types/interfaces';


interface PostsState {
    posts: Post[];
    loading: boolean;
    error: string | null | undefined;
}

const initialState: PostsState = {
    posts: [],
    loading: false,
    error: null,
};

export const fetchPosts = createAsyncThunk<Post[], void, { rejectValue: string }>(
    'posts/fetchPosts',
    async (_, { rejectWithValue }) => {
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('Token not found in cookie');
            }
            const response = await axios.get<{ data: Post[] }>("http://localhost/api/myPosts", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            // console.log(response.data.);
            return response.data.data;
        } catch (error) {
            return rejectWithValue('Failed to fetch posts');
        }
    }
);

export const addPost = createAsyncThunk<Post, { formData: FormData }, { rejectValue: string }>(
    'posts/addPost',
    async ({ formData }, { rejectWithValue }) => {
        try {
            const token = Cookies.get('token');
            if (!token) {
                throw new Error('Token not found in cookie');
            }
            const response = await axios.post<Post>("http://localhost/api/post", formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to add post');
        }
    }
);

export const updatePost = createAsyncThunk<Post, { id: number; formData: FormData }, { rejectValue: string }>(
    'posts/updatePost',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const updatedFormData = new FormData();

            formData.forEach((value, key) => {
                updatedFormData.append(key, value);
            });

            const response = await axios.put<Post>(
                `http://localhost/api/post/${id}`,
                updatedFormData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to update post');
        }
    }
);


export const deletePost = createAsyncThunk<number, number, { rejectValue: string }>(
    'posts/deletePost',
    async (postId, { rejectWithValue }) => {
        try {
            await axios.delete(`http://localhost/api/post/${postId}`);
            return postId;
        } catch (error) {
            return rejectWithValue('Failed to delete post');
        }
    }
);

export const assignPostToInfluencer = createAsyncThunk(
    'posts/assignPostToInfluencer',
    async ({ postId, assigned }: { postId: number; assigned: number }, { rejectWithValue }) => {
        try {

            const response = await axios.patch(`http://localhost/api/assignPost/${postId}`, { assigned }, {

            });
            return response.data;
        } catch (error) {
            return rejectWithValue('Failed to assign post to influencer');
        }
    }
);

const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(addPost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(addPost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts;
            })
            .addCase(addPost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(updatePost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updatePost.fulfilled, (state, action) => {
                state.loading = false;
                const updatedPostIndex = state.posts.findIndex(post => post.id === action.payload.id);
                if (updatedPostIndex !== -1) {
                    state.posts[updatedPostIndex] = action.payload;
                }
            })
            .addCase(updatePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(deletePost.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deletePost.fulfilled, (state, action) => {
                state.loading = false;
                state.posts = state.posts.filter(post => post.id !== action.payload);
            })
            .addCase(deletePost.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
            .addCase(assignPostToInfluencer.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(assignPostToInfluencer.fulfilled, (state, action) => {
                state.loading = false;
                // Handle the fulfilled state if needed
            })
            .addCase(assignPostToInfluencer.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });

    },
});

export default postsSlice.reducer;
