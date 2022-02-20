
import React from "react"
import { useDispatch, useSelector } from "react-redux";
import Checkbox from '@mui/material/Checkbox';

import { selectTodoList, setTodoItemCompleted } from "@redux-reducers/todos";

import { TodoListStyledContainer } from "./TodoList.styled";
import TodoItem from "@components/TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector(selectTodoList);

  const handleClickItem = (id: number) => {
    dispatch(setTodoItemCompleted(id));
  }

  return (
    <TodoListStyledContainer>
      {todoList.status === "loading" && <div>Loading</div>}
      {todoList.status === "loaded" &&
        todoList.data.length !== 0 &&
        todoList.data.map((todo) => {
          return todo.completed
            ? <TodoItem key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.completed} />
            : <TodoItem key={todo.id} id={todo.id} title={todo.title} isCompleted={todo.completed} onComplete={handleClickItem} />
        })}
    </TodoListStyledContainer>
  )
}

export default TodoList;