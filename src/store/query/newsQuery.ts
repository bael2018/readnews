import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'constants/index'
import { INew } from 'types/news'

interface ApiResponse {
  nextPage: string;
  results: INew[];
  status: string;
  totalResults: number;
}

export const newsApi = createApi({
  reducerPath: 'newsApi',
  tagTypes: ['news'],
  baseQuery: fetchBaseQuery({ baseUrl: API_URL }),
  endpoints: (builder) => ({
    getCustomNews: builder.query<INew[], { category: string }>({
      query: ({ category }) => `?apikey=${import.meta.env.VITE_API_KEY}&language=en&country=us&category=${category}`,
      transformResponse: (rawResult: { results: INew[] }) => {
        return rawResult.results
      },
      providesTags: () => ['news'], 
    }),
    getCustomMainNews: builder.query<INew[], { category: string }>({
      query: ({ category }) => `?apikey=${import.meta.env.VITE_API_KEY}&language=en&country=us&category=${category}&size=6`,
      transformResponse: (rawResult: { results: INew[] }) => {
        return rawResult.results
      },
      providesTags: () => ['news'], 
    }),
    getCategoryNews: builder.query<ApiResponse, { category: string, page: string }>({
      query: ({ category, page }) => `?apikey=${import.meta.env.VITE_API_KEY}&language=en&country=us&category=${category}&size=10${page && `&page=${page}`}`,
      providesTags: () => ['news'], 
    }),
    getSingleNew: builder.query<INew, string>({
      query: ( title ) => `?apikey=${import.meta.env.VITE_API_KEY}&qInMeta=${title}`,
      transformResponse: (rawResult: { results: INew[] }) => {
        return rawResult.results[0]
      },
      providesTags: () => ['news'], 
    }),
    getSearchNews: builder.query<INew[], { search: string }>({
      query: ({ search }) => `?apikey=${import.meta.env.VITE_API_KEY}&language=en&country=us&q=${search}`,
      transformResponse: (rawResult: { results: INew[] }) => {
        return rawResult.results
      },
      providesTags: () => ['news'], 
    }),
  }),
})

export const { 
  useGetCustomNewsQuery,
  useGetCustomMainNewsQuery,
  useGetSingleNewQuery,
  useGetCategoryNewsQuery,
  useGetSearchNewsQuery
} = newsApi