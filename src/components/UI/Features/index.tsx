import React from "react";
import { Icon, Title, Content, Container } from "./styles";
import features from "_mock/Feature";
import IFeature from "_models/IFeature";

type Props = {
  features: IFeature[];
};

const Component: React.FC<Props> = (id, icon, title, description) => {
  return (
    <Container>
      <div>
        <Icon src={icon} />
        <Title>{title}</Title>
      </div>
      <Content>{description}</Content>
    </Container>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
