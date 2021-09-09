import { createSlice } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";
const auth = createSlice({
  name: "prodcuts",
  initialState: {
    auth: [],
  },
  reducers: {
    authintcation: (state, { payload }) => {
      auth = payload;
    },
  },
});

export const apiTouched = createAction("apiTouched");
const { authintcation } = auth.actions;
export default auth.reducer;

// actions
