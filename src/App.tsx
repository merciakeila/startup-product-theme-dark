import React from "react";
import GlobalStyles from "./styles/GlobalStyles";
import { Container } from "./styles/GlobalStyles";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/UI/Header";

const App: React.FC = () => (
  <Container>
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Routes />
    </BrowserRouter>
  </Container>
);

export default App;
