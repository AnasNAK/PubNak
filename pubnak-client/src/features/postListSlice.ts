import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

interface Image {
  id: number;
  path: string;

}
interface profile_image {
  id: number;
  path: string;

}

interface Category {
  id: number;
  name: string;

}

interface Client {
  id: number;
  name: string;
  email: string;
  profile_image :profile_image;

}
export interface assigned_post {
  id: number;
  name: string;
  email: string;

}

interface Post {
  id: number;
  title: string;
  content: string;
  category_id: number;
  created_at: string;
  category: Category;
  images: Image[];
  client: Client;
  assigned_post: assigned_post;
}

interface PostsState {
  posts: Post[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
  const response = await axios.get<{data:Post[]}>('http://localhost/api/post');
  console.log(response.data.data);
  return response.data.data;
});

const postListSlice = createSlice({
  name: 'postsList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'idle';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch posts';
      });
  },
});

export default postListSlice.reducer;
