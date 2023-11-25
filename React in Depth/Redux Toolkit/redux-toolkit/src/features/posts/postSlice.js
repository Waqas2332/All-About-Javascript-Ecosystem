import { createSlice } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = {
  posts: [],
  status: "idle", // "idle","loading","succeeded","failed",
  error: null,
};

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.posts.push(action.payload);
    },
  },
});

export default postSlice.reducer;

export const selectAllPosts = (state) => state.posts.posts;

export const { postAdded } = postSlice.actions;
