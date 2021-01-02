import React, { useState, useEffect } from "react";
import { Img, Container } from "./styles";
import { Title, Paragraph } from "_UI/Text";
import dashboard from "_assets/features.png";
import Features from "_UI/Features";
import FeaturesMock from "_mock/Feature";
import IFeature from "_models/IFeature";

const Component: React.FC = (Props) => {
  const [features, setFeatures] = useState<IFeature[]>([]); // Iniciar como array vazio, necessário para o futuro.
  useEffect(() => {
    setFeatures(FeaturesMock);
  }, []);

  return (
    <>
      <Container>
        <Title>Feature</Title>
        <Paragraph>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </Paragraph>
        <div>
          <Img src={dashboard} />
          <div>
            {features.map((feature) => (
              <Features key={feature.id.toString()} feature={feature} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
