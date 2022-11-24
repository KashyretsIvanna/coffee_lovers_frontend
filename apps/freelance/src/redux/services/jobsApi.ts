import { ApiRoutes, baseUrl } from '@freelance/constants';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from 'redux/store';
import { FindJobsResponse, GetJobParams } from 'redux/types/jobs.types';

enum EndpointsRoutes {
  findJobs = '/find',
}

export const jobsApi = createApi({
  reducerPath: 'jobsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: baseUrl + ApiRoutes.JOBS,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.access_token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: builder => ({
    findJobs: builder.query<FindJobsResponse, GetJobParams>({
      query: params => ({
        url: EndpointsRoutes.findJobs,
        params,
      }),
    }),
  }),
});

export const { useFindJobsQuery } = jobsApi;
