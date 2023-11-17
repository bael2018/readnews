import { fetchBaseQuery, createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from 'constants/index'
import { INew } from 'types/news'

export const newsApi = createApi({
  reducerPath: 'newsApi',
  tagTypes: ['news'],
  baseQuery: fetchBaseQuery({ 
    baseUrl: API_URL, 
    headers: {
      'X-Api-Key': import.meta.env.VITE_API_KEY
  } }),
  endpoints: (builder) => ({
    getCustomNews: builder.query<INew[], { size: number, domain: string }>({
      query: ({ size, domain }) =>  `everything/?pageSize=${size}&page=1&domains=${domain}&language=en`,
      transformResponse: (rawResult: { articles: INew[] }) => {
        return rawResult.articles
      },
      providesTags: () => ['news'], 
    }),
    getCategoryNews: builder.query<INew[], { category: string, size: number }>({
      query: ({ category, size }) =>  `top-headlines/?category=${category}&pageSize=${size}&page=1&country=us`,
      transformResponse: (rawResult: { articles: INew[] }) => {
        return rawResult.articles
      },
      providesTags: () => ['news'], 
    }),
    getCustomCategoryNews: builder.query<INew[], { category: string, pageSize: number, page: number }>({
      query: ({ category, pageSize, page }) =>  `top-headlines/?category=${category}&pageSize=${pageSize}&page=${page}&country=us`,
      transformResponse: (rawResult: { articles: INew[] }) => {
        return rawResult.articles
      },
      providesTags: () => ['news'], 
    }),
    getSingleNew: builder.query<INew, string>({
      query: (title) =>  `everything/?q=${title}`,
      transformResponse: (rawResult: { articles: INew[] }) => {
        return rawResult.articles[0]
      },
      providesTags: () => ['news'], 
    }),
  }),
})

export const { 
  useGetCustomNewsQuery,
  useGetSingleNewQuery,
  useGetCategoryNewsQuery,
  useGetCustomCategoryNewsQuery
} = newsApi