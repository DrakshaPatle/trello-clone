import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const BASE_URL ='http://task.consdeployer.com/api/'

export const apiSlice = createApi({
  reducerPath: "apiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    signup: builder.mutation({
      query: (body) => ({
        url: "/user/auth/email",
        method: "POST",
        body,
      }),
    }),
   
    createpost: builder.mutation({
      query: ({ body, token }) => ({
        url: "/post",
        method: "POST",
        body,
        headers: {
          "x-access-token": token,
          "Content-Type": "multipart/form-data",
        },
      }),
    }),
    gettags: builder.query({
      query: ({ token }) => ({
        url: "/getalltagss",
        method: "GET",
        headers: {
          "x-access-token": token,
        },
      }),
    }),
  }),
});

export const {
  useSignupMutation,
  useCreatepostMutation,
  useGettagsQuery,
 
} = apiSlice;
