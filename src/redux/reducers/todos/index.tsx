import axios from "axios"

import { RootState } from "@redux-store";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { INTERFACE_TODO, INTERFACE_TODO_LIST, INTERFACE_REJECT_VALUE } from "@helpers/types"

const initialState: INTERFACE_TODO_LIST = {
  data: [],
  status: "idle",
  error: null,
}

export const fetchTodos = createAsyncThunk<
  INTERFACE_TODO[],
  string,
  { rejectValue: INTERFACE_REJECT_VALUE }
>("todoList/fetchTodos", async (url: string, thunkApi) => {
  const response = await axios.get(url, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (response.status !== 200) {
    // Return the error message:
    return thunkApi.rejectWithValue({
      message: "Failed to fetch todos.",
    });
  }
  return response.data;
});

export const todoList = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    resetTodoList: (state) => {
      state.status = "idle";
      state.error = null;
      state.data = [];
    },
    setTodoItemCompleted: (state, action: PayloadAction<number>) => {
      const todoId = action.payload;
      const index = state.data.findIndex(((todo: INTERFACE_TODO) => todo.id === todoId))
      state.data[index].completed = true;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.status = "loading";
      state.error = null;
    });
    builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
      state.data = payload;
      state.status = "loaded";
    });
    builder.addCase(fetchTodos.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message;
      state.status = "loaded";
    });
  },
});

export const { resetTodoList, setTodoItemCompleted } = todoList.actions;

export const selectTodoList = (state: RootState) => state.todoList;

export default todoList.reducer;
