import { createSlice } from '@reduxjs/toolkit';

interface InitialState {}

const initialState: InitialState = {};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {},
});

export const {} = appSlice.actions;
export const appReducer = appSlice.reducer;
