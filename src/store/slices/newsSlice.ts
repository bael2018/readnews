import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { INew } from "types/news";

const initialState = {
  new: {
    source: {
      id: '',
      name: ''
    },
    author: '',
    title: '',
    description: '',
    url: '',
    urlToImage: '',
    content: '',
    publishedAt: ''
  } as INew
}

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    addNew: (state, action: PayloadAction<INew>) => {
      state.new = action.payload
    }
  }
})

export const { addNew } = newsSlice.actions
export default newsSlice.reducer