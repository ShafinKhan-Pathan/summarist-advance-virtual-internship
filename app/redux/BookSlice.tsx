import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookAPI = createApi({
  reducerPath: "bookAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_BOOKS_BASE_URL,
  }),
  endpoints: (builder) => ({
    getRecommendedBooks: builder.query<any, void>({
      query: () => `?status=recommended`,
    }),
    getSuggestedBooks: builder.query<any, void>({
      query: () => `?status=suggested`,
    }),
    getSelectedBook: builder.query<any, void>({
      query: () => `?status=selected`,
    }),
    getBookById: builder.query<any, string>({
      query: (id) => `${process.env.NEXT_PUBLIC_BOOK_BASE_URL}?id=${id}`,
    }),
  }),
});

export const {
  useGetRecommendedBooksQuery,
  useGetSuggestedBooksQuery,
  useGetSelectedBookQuery,
  useGetBookByIdQuery,
} = bookAPI;
