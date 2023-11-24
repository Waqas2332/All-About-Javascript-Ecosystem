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
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
  },
});

export default postSlice.reducer;

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postSlice.actions;
