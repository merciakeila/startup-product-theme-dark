import React from "react";
import { Feature, Container, Icon } from "./styles";
import feature from "_assets/features.png";
import { Title, Paragraph } from "_components/UI/Text";

import vetor from "_assets/vetor1.svg";
import vetor2 from "_assets/vetor2.svg";

type Props = {
  icon: string;
  title: string;
  description: string;
};

const Props = [
  {
    icon: "vetor",
    title: "Sou um titulo",
    description: "Text exemplo",
  },
  {
    icon: "vetor",
    title: "Sou um titulo",
    description: "Text exemplo",
  },
];

const Component: React.FC<Props> = ({ icon, title, description }) => {
  return (
    <>
      <Container>
        <Title>Feature</Title>
        <Paragraph>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </Paragraph>
        <div>
          <Feature src={feature} />
          <div>
            <Icon src={icon} />
            <Title>{title}</Title>
            <Paragraph>{description}</Paragraph>
          </div>
        </div>
      </Container>
    </>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
