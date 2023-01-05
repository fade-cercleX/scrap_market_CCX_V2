import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export const {} = authSlice.actions;

export default authSlice.reducer;
