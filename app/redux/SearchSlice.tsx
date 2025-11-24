import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const searchAPI = createApi({
  reducerPath: "searchAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_SEARCH_BOOK_BASE_URL,
  }),
  endpoints: (builder) => ({
    searchBookByTitleOrAuthor: builder.query<any, string>({
      query: (search) => `?search=${search}`,
    }),
  }),
});

export const {useSearchBookByTitleOrAuthorQuery} = searchAPI