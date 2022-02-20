import { color } from "@helpers/styles";
import styled from "styled-components";

export const TodoItemContainer = styled.div`
  height: 50px;
  width: inherit;

  display: flex;
  align-items: center;

  padding: 10px;

  margin: 10px;

  background-color: ${color.bg.light};

  color: ${color.text.secondary};
`