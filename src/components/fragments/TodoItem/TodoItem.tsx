
import React from "react"
import Checkbox from '@mui/material/Checkbox';

import { TodoItemContainer } from "./TodoItem.styled";

export interface TodoItemProps {
  id: number;
  title: string;
  isCompleted: boolean;
  onComplete?: (id: number) => void;
}

const TodoItem = ({ id, title, isCompleted, onComplete }: TodoItemProps) => {
    const handleClick = (id: number) => {
      onComplete && onComplete(id);
  }
  
  return (
    <TodoItemContainer onClick={() => handleClick(id)}>
      <Checkbox checked={isCompleted} />
      <div style={{ marginLeft: 10 }}>{title}</div>
    </TodoItemContainer>
  )
}

export default TodoItem;