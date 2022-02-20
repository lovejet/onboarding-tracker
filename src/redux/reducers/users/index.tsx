import axios from "axios"

import { RootState } from "@redux-store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { INTERFACE_USER, INTERFACE_USER_LIST, INTERFACE_REJECT_VALUE } from "@helpers/types"

const initialState: INTERFACE_USER_LIST = {
  data: [],
  status: "idle",
  error: null,
}

export const fetchUsers = createAsyncThunk<
  INTERFACE_USER[],
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
>("userList/fetchUsers", async (url: string, thunkApi) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch users.",
    });
  }
  return response.data;
});

export const userList = createSlice({
  name: "userList",
  initialState,
  reducers: {
    resetUserList: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "loaded";
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "loaded";
    });
  },
});

export const { resetUserList } = userList.actions;

export const selectUserList = (state: RootState) => state.userList;

export default userList.reducer;
