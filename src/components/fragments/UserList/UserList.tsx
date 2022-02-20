
import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";

import { selectUserList } from "@redux-reducers/users";

import { UserListStyledContainer, UserItemContainer } from "./UserList.styled";
import { fetchTodos } from "@redux-reducers/todos";
import { TODOS_API_URL } from "@constants";

const UserList = () => {
  const dispatch = useDispatch();
  const userList = useSelector(selectUserList);
  const { userId } = useParams<string>();
  const selectedUserId = +(userId || "-1");
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchTodos(`${TODOS_API_URL}?userId=${selectedUserId}`));
  }, [dispatch, selectedUserId])

  const handleClickItem = (id: number) => {
    navigate(`/${id}`);
  }

  if (selectedUserId === -1) return null;

  return (
    <UserListStyledContainer>
      {userList.status === "loading" && <div>Loading</div>}
      {userList.status === "loaded" &&
        userList.data.length !== 0 &&
        userList.data.map((user) => {
          return (
            <UserItemContainer key={user.id} onClick={() => handleClickItem(user.id)}>
              <div>{user.name}</div>
              {user.id === selectedUserId && <div>{">>"}</div>}
            </UserItemContainer>
          );
        })}
    </UserListStyledContainer>
  )
}

export default UserList;