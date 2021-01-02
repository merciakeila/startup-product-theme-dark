import React from "react";
import { Icon, Title, Content, Container } from "./styles";
//import IFeature from "_models/IFeature";
//import Features from "_models/IFeature";
import features from "_mock/Feature";

const Component: React.FC = () => {
  return (
    <>
      {features.map(({ id, icon, title, description }) => (
        <Container key={id}>
          <div>
            <Icon src={icon} />
            <Title>{title}</Title>
          </div>
          <Content>{description}</Content>
        </Container>
      ))}
    </>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
