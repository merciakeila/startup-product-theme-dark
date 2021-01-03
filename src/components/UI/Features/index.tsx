import React from "react";
import { Icon, Title, Content, Container } from "./styles";
import IFeature from "_models/IFeature";

type Props = {
  feature: IFeature;
  /*
  icon: string;
  title: string;
  description: string;
  */
};

const Feauture: React.FC<Props> = ({ feature }) => {
  const { icon, heading, description } = feature;

  return (
    <Container>
      <div>
        <Icon src={icon} />
        <Title>{heading}</Title>
      </div>
      <Content>{description}</Content>
    </Container>
  );
};

Feauture.displayName = "UI/Feauture";
export default Feauture;
