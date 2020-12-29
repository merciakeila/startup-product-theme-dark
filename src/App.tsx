import React from "react";
import GlobalStyles from "_styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "_routes";
import Header from "_UI/Header";

const App: React.FC = () => (
  <BrowserRouter>
    <GlobalStyles />
    <Header />
    <Routes />
  </BrowserRouter>
);

export default App;
