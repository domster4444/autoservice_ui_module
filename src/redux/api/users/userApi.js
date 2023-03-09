import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { globalConstant } from "constant/constant";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: globalConstant.serverUrl,
  }),

  endpoints: (builder) => ({
    // postAuthUser: builder.mutation({
    //   query: (body) => ({
    //     url: "/auth/login",
    //     method: "POST",
    //     body,
    //   }),
    // }),

    //--
    getUser: builder.query({
      query: () => ({
        url: "/api/v1/users/",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    //--
    getUserByRole: builder.query({
      query: (role) => ({
        url: `/api/v1/users/role/${role}`,
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
    //--
  }),
});

export const { useGetUserQuery, useGetUserByRoleQuery } = userApi;
