import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { globalConstant } from "constant/constant";

export const vehicleApi = createApi({
  reducerPath: "vehicleApi",
  baseQuery: fetchBaseQuery({
    baseUrl: globalConstant.serverUrl,
  }),

  endpoints: (builder) => ({
    getVehicle: builder.query({
      query: () => ({
        url: "/api/v1/vehicles",
        method: "GET",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }),
    }),
  }),
});

export const { useGetVehicleQuery } = vehicleApi;
