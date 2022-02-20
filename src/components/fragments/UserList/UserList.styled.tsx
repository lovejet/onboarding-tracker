import { color } from "@helpers/styles";
import styled from "styled-components";

export const UserListStyledContainer = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  ::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow-x: hidden;
  overflow-y: auto;

  margin-left: 20px;
  margin-right: 20px;

  cursor: pointer;
`;

export const UserItemContainer = styled.div`
  height: 50px;
  width: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  margin: 10px;

  background-color: ${color.bg.secondary};
`