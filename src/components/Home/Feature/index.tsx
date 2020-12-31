import React from "react";
import { Feature, Container } from './styles'
import feature from '_assets/features.png'
import { Title, Paragraph } from "_components/UI/Text";

const Component: React.FC = () => {
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
            <Paragraph>Conteúdo</Paragraph>
          </div>
        </div>
      </Container>
    </>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
