import { combineReducers, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  loading: false,
  user: null,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    LoadUserRequest: (state) => {
      state.loading = true;
    },
    LoadUserSuccess: (state, action) => {
      state.isAuthenticated = true;
      state.loading = false;
      state.user = action.payload;
    },
    LoadUserFail: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.isAuthenticated = false;
    },
  },
});

export const { LoadUserRequest, LoadUserSuccess, LoadUserFail } = userSlice.actions;

// Extract the reducer function from the userSlice
export const userReducer = userSlice.reducer;

// Combine reducers
export default combineReducers({
  user: userReducer,
});
