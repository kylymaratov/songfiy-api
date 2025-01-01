import { createSlice } from '@reduxjs/toolkit';

interface InitialState {
  playNow: any;
  paused: boolean;
  queue: any[];
}

const initialState: InitialState = {
  playNow: null,
  paused: true,
  queue: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {},
});

export const {} = playerSlice.actions;
export const playerReducer = playerSlice.reducer;
