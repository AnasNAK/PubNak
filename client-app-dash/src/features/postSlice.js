import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from 'js-cookie'


const initialState = {
  loading: false,
  postList: [],
  error: "",
  successMessage: "",
};

const postSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    fetchPostsRequest: (state) => {
      state.loading = true;
      state.error = "";
      state.successMessage = "";
    },
    fetchPostsSuccess: (state, action) => {
      state.loading = false;
      state.postList = Array.isArray(action.payload) ? action.payload : [];
    },
    fetchPostsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    archivePostRequest: (state) => {
      state.loading = true;
      state.error = "";
      state.successMessage = "";
    },
    archivePostSuccess: (state, action) => {
      state.loading = false;
      state.postList = state.postList.map((post) =>
        post.id === action.payload.id ? action.payload : post
      );
      state.successMessage = "Post archived successfully";
    },
    archivePostFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsFailure,
  archivePostRequest,
  archivePostSuccess,
  archivePostFailure,
} = postSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const response = await axios.get("http://localhost/api/allPsts");
   
    dispatch(fetchPostsSuccess(response.data.data));

  } catch (error) {
    dispatch(fetchPostsFailure(error.message));
  }
};

export const archivePost = (postId) => async (dispatch) => {
  dispatch(archivePostRequest());
  try {
    const response = await axios.delete(`http://localhost/api/post/${postId}`);
    dispatch(archivePostSuccess(response.data));
    // console.log(response.data);
    dispatch(fetchPosts());
  } catch (error) {
    dispatch(archivePostFailure(error.message));
  }
};

export default postSlice.reducer;
