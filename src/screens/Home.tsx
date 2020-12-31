import { title } from "process";
import React from "react";
import { Main, Features } from "_components/Home";

const Home: React.FC = () => (
  <>
    <Main />
    <Features title={title} description={description} icon={icon} />
  </>
);

export default Home;
