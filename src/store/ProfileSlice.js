import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../api.js";


export const fetchProfiles = createAsyncThunk(
  "profiles/fetchProfiles",
  async () => {
    try {
      const response = await axios.get(API_URL);
      return response.data;
    } catch (error) {
      throw new Error("Failed to fetch profiles: " + error.message);
    }
  }
);

const profileSlice = createSlice({
  name: "profiles",
  initialState: { data: [], status: "idle", error: null, searchQuery: "" },
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfiles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProfiles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProfiles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setSearchQuery } = profileSlice.actions;
export default profileSlice.reducer;