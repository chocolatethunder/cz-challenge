import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BACKEND_API = "http://localhost:8000/";

export const backendApi = createApi({
  reducerPath: "backendApi",
  baseQuery: fetchBaseQuery({ baseUrl: BACKEND_API }),
  endpoints: (builder) => ({
    getPickList: builder.query({
      query: () => "order/pick",
    }),
    getPackList: builder.query({
      query: () => "order/pack",
    }),
  }),
});

export const { useGetPickListQuery, useGetPackListQuery } = backendApi;
