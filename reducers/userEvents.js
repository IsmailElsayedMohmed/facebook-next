import { createSlice } from "@reduxjs/toolkit";
const userEvents = createSlice({
  name: "prodcuts",
  initialState: {
    user: [],
  },
  reducers: {
    allUser: (state, { payload }) => {
      user = payload;
    },
  },
});

const { allUser } = userEvents.actions;
export default userEvents.reducer;

// actions
