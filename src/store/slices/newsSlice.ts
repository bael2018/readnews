import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: { newPath: string } = {
  newPath: ''
}

const newsSlice = createSlice({
  name: 'newsSlice',
  initialState,
  reducers: {
    addNewPath: (state, action: PayloadAction<string>) => {
      state.newPath = action.payload
    }
  }
})

export const { addNewPath } = newsSlice.actions
export default newsSlice.reducer