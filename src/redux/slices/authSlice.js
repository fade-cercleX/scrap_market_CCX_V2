import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Auth } from "../utils/configURL";
import Toast from "react-native-toast-message";

const showError = (text) => {
  Toast.show({
    type: "error",
    text1: text,
  });
};

const showToast = (text) => {
  Toast.show({
    type: "success",
    text1: text,
  });
};

// createAsyncThunk accept 2 arguments the first one is string use  to genrate the action type and the second one it is call back funcation

const authSlice = createSlice({
  name: "auth",
  initialState: {
    signUp: {
      loading: false,
      data: {},
      error: null,
    },
    loginState: {},
    stateUpState: {},
  },
  reducers: {
    signUpStart(state) {
      state.signUp.loading = true;
    },
    signUpStep1Success(state, action) {
      state.signUp.loading = false;
      state.signUp.data = action.payload;
    },
    signupError(state, action) {
      state.signUp.loading = false;
    },
  },
  extraReducers: () => {},
});

export const { signUpStart, signUpStep1Success, signupError } =
  authSlice.actions;

// register user step1

export const registerUser = (phoneNumber) => async (dispatch) => {
  try {
    dispatch(signUpStart());
    const res = await Auth.post("/account/create/step-1", {
      phoneNumber: phoneNumber,
    });
    console.log(res.data);
    dispatch(signUpStep1Success(res.data));
  } catch (error) {
    showError(error.response ? error.response?.data : error.message);
    dispatch(signupError(error));
  }
};

// register user step2 (confirm OTP)

export const confirmOTP =
  (phoneNumber, OTP, navigation) => async (dispatch) => {
    try {
      dispatch(signUpStart());
      const res = await Auth.post("/account/create/step-2", {
        phoneNumber: phoneNumber,
        OTP: OTP,
        // sessionId: session,
      });
      dispatch(confirmOTPSuccess(res));
    } catch (error) {
      dispatch(signupError(error));
    }
  };

export default authSlice.reducer;
