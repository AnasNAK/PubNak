import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface UserCredential {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface ResponseType {
  name: string;
  role: string;
}

export const RegisterUser = createAsyncThunk<ResponseType, UserCredential>(
  'user/RegisterUser',
  async (userCredential: UserCredential) => {
    const request = await axios.post(`http://localhost/api/auth/register`, userCredential);
    const response = await request.data;
    return response;
  }
);

const initialState = {
  user: {},
  UserList: [],
  isLoggedIn: false,
  isLoading: false, 
  token: "",
  role: '',
  error: null as string | null,
  loading: false, 
};

const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.loading = false; 
        state.user = action.payload.name;
        state.role = action.payload.role;
        console.log(action.payload);
        console.log("Registered successfully");
      })
      .addCase(RegisterUser.pending, (state) => {
        state.loading = true; 
        state.error = null; 
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.loading = false; 
        state.error = action.error.message || 'Something went wrong'; 
      });
  },
});

export default UserSlice.reducer;