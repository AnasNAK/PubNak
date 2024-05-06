import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Cookies from 'js-cookie';

export interface Influencer {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  instagram: string | null;
  youtube: string | null;
  profile_image: string | ProfileImage | null;
  role: string | null;
  client : Client[] | null;
}
export interface Client {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  profile_image: string | ProfileImage | null;
  role: string | null;
  pivot:pivot | null;
}


export interface pivot {
  influencer_id: number;
  client_id: number;
  rating: number;
  comment: string;
}

export interface ProfileImage {
  path: string;
}
export interface Feedback {
  rating: number;
  comment: string;
}

interface InfluencerState {
  influencers: Influencer[];
  influencer: Influencer | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
  searchTerm: string;
}

const initialState: InfluencerState = {
  influencers: [],
  influencer: null,
  status: 'idle',
  error: null,
  searchTerm: '',
};

export const fetchInfluencers = createAsyncThunk(
  'influencers/fetchInfluencers',
  async () => {
    try {
      const response = await axios.get<{ data: Influencer[] }>('http://localhost/api/influencers');
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch influencers');
    }
  }
);

export const fetchRandomInfluencers = createAsyncThunk(
  'influencers/fetchRandomInfluencers',
  async () => {
    try {
      const response = await axios.get<{ data: Influencer[] }>('http://localhost/api/getRandomInfluencers');
      return response.data.data;
    } catch (error) {
      throw new Error('Failed to fetch random influencers');
    }
  }
);

export const fetchInfluencerById = createAsyncThunk(
  'influencers/fetchInfluencerById',
  async (influencerId: number) => {
    try {
      const response = await axios.post<{ data: Influencer }>('http://localhost/api/show', { influencer_id: influencerId });
     console.log(response.data.data)
      return response.data.data;            
    } catch (error) {
      throw new Error('Failed to fetch influencer by id');
    }
  }
);

export const sendFeedback = createAsyncThunk(
  'influencers/sendFeedback',
  async ({ influencerId, feedback }: { influencerId: number; feedback: Feedback }) => {
    try {
      const token = Cookies.get('token');
      if (!token) {
        throw new Error('Token not found in cookie');
      }
      await axios.post('http://localhost/api/feedback', { influencer_id: influencerId, feedback },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
     
      }

      );
      return feedback;
    } catch (error) {
      throw new Error('Failed to send feedback');
    }
  }
);



const influencerSlice = createSlice({
  name: 'influencers',
  initialState,
  reducers: {
    updateSearchTerm(state, action: PayloadAction<string>) {
      state.searchTerm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfluencers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInfluencers.fulfilled, (state, action: PayloadAction<Influencer[]>) => {
        state.status = 'succeeded';
        state.influencers = action.payload;
      })
      .addCase(fetchInfluencers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch influencers';
      })
      .addCase(fetchRandomInfluencers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomInfluencers.fulfilled, (state, action: PayloadAction<Influencer[]>) => {
        state.status = 'succeeded';
        state.influencers = action.payload;
      })
      .addCase(fetchRandomInfluencers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch random influencers';
      })
      .addCase(fetchInfluencerById.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchInfluencerById.fulfilled, (state, action: PayloadAction<Influencer>) => {
        state.status = 'succeeded';
        state.influencer = action.payload;
      })
      .addCase(fetchInfluencerById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'Failed to fetch influencer by id';
      });
  },
});


export const { updateSearchTerm } = influencerSlice.actions;

export default influencerSlice.reducer;
