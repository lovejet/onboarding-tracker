import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import usersReducer from "@redux-reducers/users";
import todosReducer from "@redux-reducers/todos";

export const store = configureStore({
  reducer: {
    userList: usersReducer,
    todoList: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
