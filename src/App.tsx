import { useEffect } from 'react';
import './App.css';
import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import { fetchUsers, selectUserList } from "@redux-reducers/users";

import { toVW } from "@helpers/methods";
import { color, screenMax, spaceDt, spaceMb } from "@helpers/styles";

import { USERS_API_URL } from "@constants";

import StylesGlobal from "@components/StylesGlobal";
import Header from "@components/Header";
import Footer from "@components/Footer";
import UserList from '@components/UserList';
import TodoList from '@components/TodoList';

const AppContainer = styled.div`
  height: 100vh;
  background-color: ${color.bg.primary};
`;

const BodyContainer = styled.div`
  display: flex;

  height: calc(100% - ${toVW(100, "desktop")});
  color: ${color.text.light};
  background-color: ${color.bg.black};
  padding: ${spaceDt(2)} ${spaceDt(3)};

  ${screenMax("lg")} {
    height: calc(100% - ${toVW(70, "mobile")});
    padding: ${spaceMb(2)} ${spaceMb(1)};
  }
`;

const Container = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`

const Home = () => {
  const userList = useSelector(selectUserList);
  const navigate = useNavigate();

  useEffect(() => {
    if (userList.status === "loaded" && userList.data.length !== 0) {
      navigate(`/${userList.data[0].id}`)
    }
  }, [userList])

  return (
    <>
      {userList.status === "idle" && <Container>Loading</Container>}
      {userList.status === "loading" && <Container>Loading</Container>}
      {userList.status === "loaded" && userList.data.length === 0 && <Container>No Users Found</Container>}
    </>
  )
}

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(USERS_API_URL));
  }, [dispatch]);

  return (
    <AppContainer>
      <StylesGlobal />
      <Header />
      <BodyContainer>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path=":userId"
              element={(
                <>
                  <UserList />
                  <TodoList />
                </>
              )} />
          </Routes>
        </Router>
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
