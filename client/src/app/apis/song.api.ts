import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from './baseUrl';
import { TrendingSongsResponse } from '@shared/types/response.types';

export const songApi = createApi({
  reducerPath: 'songApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getTrendingSongs: builder.query<TrendingSongsResponse, string>({
      query: (query: string) => '/song/trending' + query,
    }),
  }),
});

export const { useGetTrendingSongsQuery } = songApi;
