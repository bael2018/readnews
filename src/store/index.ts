import { configureStore } from "@reduxjs/toolkit";
import { newsApi } from "./query/newsQuery";
import newsSlice from "./slices/newsSlice";

export const store = configureStore({
  reducer: {
    [newsApi.reducerPath]: newsApi.reducer,
    news: newsSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(
    newsApi.middleware
  )
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch