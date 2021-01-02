import { title } from "process";
import React from "react";
import { Main, Features } from "_components/Home";
import features from "_mock/Feature";

const Home: React.FC = () => (
  <>
    <Main />
    <Features />
  </>
);

export default Home;
