import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
import axios from 'axios';
// import { WritableDraft } from 'immer'; 


interface UserCredential {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface ProfileUpdateData {
  id?: number;
  name: string;
  email: string;
  role:string;
  password: string;
  profile_image: string | File;
  instagram: string | undefined;
  youtube: string | undefined;
}

interface UserLog {
  email: string;
  password: string;
}

interface UserState {
  user: ProfileUpdateData | ResponseType;
  isLoggedIn: boolean;
  isLoading: boolean;
  error: string | null | undefined;
}

interface ResponseType {
  id: number;
  name: string;
  role: string;
  email: string;
  instagram: string,
  youtube: string
  profile_image: {}
}

const initialState: UserState = {
  user: {
    id: undefined,
    name: '',
    email: '',
    password: '',
    profile_image: '',
    instagram: '',
    youtube: '',
    role:''
  },
  isLoggedIn: false,
  isLoading: false,
  error: null,
};


export const logoutUser = createAsyncThunk(
  'user/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('Token not found in cookie');
      }

      const response = await axios.post('http://localhost/api/auth/logout', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      Cookies.remove('token');

      return response.data;
    } catch (error) {
      console.error('Logout failed:', error);
      return rejectWithValue('Logout failed');
    }
  }
);

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

    const Token = response.access_token;
    var twoHoursInDays = 2 / 24;
    Cookies.set('token', Token, { expires: twoHoursInDays });
    if (response.code === 207) {

      // window.location.href = 'https://pubnak-dash.vercel.app/';
      window.location.href = 'http://localhost:5173/';

    }


    return response;
  }
);

export const updateProfile = createAsyncThunk<ProfileUpdateData, FormData, { rejectValue: string }>(
  "profileClient/update",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('Token not found in cookie');
      }

      console.log(formData);
      const response = await axios.post(
        "http://localhost/api/auth/UpdateProfileClient",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue('An error occurred');
    }
  }
);
export const updateProfileInfluencer = createAsyncThunk<ProfileUpdateData, FormData, { rejectValue: string }>(
  "profileInfluencer/update",
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('Token not found in cookie');
      }

      console.log(formData);
      const response = await axios.post(
        "http://localhost/api/auth/UpdateProfileInfluencer",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return response.data;
    } catch (error) {
      return rejectWithValue('An error occurred');
    }
  }
);


export const getUser = createAsyncThunk<ProfileUpdateData, string | undefined, { rejectValue: string }>(
  'user/getUser',
  async (token: string | undefined, { rejectWithValue }) => {
    try {
      const response = await axios.post<ProfileUpdateData>('http://localhost/api/auth/FindMe', null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to fetch user data');
    }
  }
);


const UserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(RegisterUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
        console.log(action.payload);
      })
      .addCase(RegisterUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(RegisterUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      })
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, action: PayloadAction<ProfileUpdateData>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateProfile.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error ? String(action.error) : 'Something went wrong';
      })
      .addCase(updateProfileInfluencer.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(updateProfileInfluencer.fulfilled, (state, action: PayloadAction<ProfileUpdateData>) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(updateProfileInfluencer.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error ? String(action.error) : 'Something went wrong';
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.user = initialState.user; 
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? String(action.payload) : 'Logout failed';
      });
  },
});

export default UserSlice.reducer;