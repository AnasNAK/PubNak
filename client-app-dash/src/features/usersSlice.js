import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  influencers: [],
  clients: [],
  error: '',
};

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  try {
    const response = await axios.get('http://localhost/api/auth/users');
    return response.data;
  } catch (error) {
    throw error;
  }
});

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.influencers = action.payload.influencers || [];
        state.clients = action.payload.clients || [];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;