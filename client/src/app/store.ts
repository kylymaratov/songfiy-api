import { configureStore } from '@reduxjs/toolkit';
import { appReducer } from './slices/app.slice';
import { playerReducer } from './slices/player.slice';
import { songApi } from './apis/song.api';

export const store = configureStore({
  reducer: {
    app: appReducer,
    player: playerReducer,
    [songApi.reducerPath]: songApi.reducer,
  },
  middleware: (middlewares) => middlewares().concat(songApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
