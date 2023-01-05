import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const scrapPostsSlice = createSlice({
  name: "scrapPost",
  initialState: {
    loading: false,
    data: [],
  },

  reducers: {
    fetchingData(state) {
      state.loading = true;
    },
    dataFetchedSuccess(state, action) {
      state.loading = false;
      state.data = action.payload;
    },
    cannotFetchData(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },

  extraReducers:{

  }
});

export const { fetchingData, dataFetchedSuccess, cannotFetchData } =
  scrapPostsSlice.actions;

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchingData());
  try {
    // const res = await axios
    // dispatch(dataFetchedSuccess(data))
  } catch (error) {
    dispatch(cannotFetchData(error));
  }
};


export default scrapPostsSlice.reducer