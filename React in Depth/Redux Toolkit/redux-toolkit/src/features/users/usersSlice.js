import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Ali" },
  { id: "1", name: "Waqas" },
  { id: "2", name: "Myself" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
export const {} = userSlice.actions;

export const selectAllUsers = (state) => state.users;
