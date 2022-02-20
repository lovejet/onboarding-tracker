import React from 'react';
import './App.css';
import styled from "styled-components";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { toVW } from "@helpers/methods";
import { color, screenMax, spaceDt, spaceMb } from "@helpers/styles";

import StylesGlobal from "@components/StylesGlobal";
import Header from "@components/Header";
import Footer from "@components/Footer";

const AppContainer = styled.div`
  height: 100vh;
  background-color: ${color.bg.primary};
`;

const BodyContainer = styled.div`
  height: calc(100% - ${toVW(100, "desktop")});
  color: ${color.text.light};
  background-color: ${color.bg.black};
  padding: ${spaceDt(2)} ${spaceDt(3)};

  ${screenMax("lg")} {
    height: calc(100% - ${toVW(70, "mobile")});
    padding: ${spaceMb(2)} ${spaceMb(1)};
  }
`;

function App() {
  return (
    <AppContainer>
      <StylesGlobal />
      <Header />
      <BodyContainer>
        You here?
      </BodyContainer>
      <Footer />
    </AppContainer>
  );
}

export default App;
