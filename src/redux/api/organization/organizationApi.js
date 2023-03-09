import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { globalConstant } from "constant/constant";

export const organizationApi = createApi({
  reducerPath: "organizationApi",
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
    getOrganization: builder.query({
      query: () => ({
        url: "/api/v1/organizations/",
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const { useGetOrganizationQuery } = organizationApi;
