import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';

export const freelancersApi = createApi({
  reducerPath: 'freelancersReducer',
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env['NX_API_URL']}/user/freelancer`,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.access_token as string;

      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    getFreelancer: builder.query({
      query: (page: number) => `/?page=${page}`,
    }),
  }),
});

export const { useGetFreelancerQuery } = freelancersApi;