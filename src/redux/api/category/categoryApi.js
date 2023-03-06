import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { globalConstant } from "constant/constant";

export const categoryApi = createApi({
  reducerPath: "categoryApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),

  endpoints: (builder) => ({
    getAllCategories: builder.query({
      query: () => {
        return {
          url: `/todos/1`,
          method: "GET",
        };
      },
    }),
  }),
});

// export generated hooks
export const { useGetAllCategoriesQuery } = categoryApi;
