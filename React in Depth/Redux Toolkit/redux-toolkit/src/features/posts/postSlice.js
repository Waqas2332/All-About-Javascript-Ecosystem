import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Learning Redux Toolkit",
    content: "Hey, I am learning it",
  },
  {
    id: "2",
    title: "All About Slices",
    content: "Slice things down to solve them quickly",
  },
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postSlice.reducer;

export const {} = postSlice.actions;