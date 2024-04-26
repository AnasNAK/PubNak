import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { Navigate } from "react-router-dom";

interface UserCredential {
  name: string;
  email: string;
  password: string;
  role: string;
}
interface UserLog {

  email: string;
  password: string;

}

interface ResponseType {
  name: string;
  role: string;
  token: string;

}

export const RegisterUser = createAsyncThunk<ResponseType, UserCredential>(
  'user/RegisterUser',
  async (userCredential: UserCredential) => {
    const request = await axios.post(`http://localhost/api/auth/register`, userCredential);
    const response = await request.data;
    return response;
  }
);
export const LoginUser = createAsyncThunk<ResponseType, UserLog>(
  'user/LoginUser',
  async (UserLog: UserLog) => {
    const request = await axios.post(`http://localhost/api/auth/login`, UserLog);
    const response = await request.data;
    if (response.code === 207) {



      const encodedToken = encodeURIComponent(response.access_token);

      document.cookie = `token_admin=${encodedToken}; path=/`;

      
      window.location.href = 'https://pubnak-dash-3qwwwjao7-anasnaks-projects.vercel.app';

    }if(response.code === 200){
      const encodedToken = encodeURIComponent(response.access_token);

      document.cookie = `token_user=${encodedToken}; path=/`;
      

    }

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
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isLoggedIn = true;
        console.log(action.payload);
        console.log("Login successfully");
      })
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

export default UserSlice.reducer;