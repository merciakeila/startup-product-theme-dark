import React from "react";
import { Feature, Container } from "./styles";
import {Title, Paragraph} from '_UI/Text'
import dashboard from "_assets/features.png";
import Features from '_UI/Features';

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
          <Feature src={dashboard} />
          <div>
            <Features/>
          </div>
        </div>
      </Container>
    </>
  );
};

Component.displayName = "components/Home/feature";
export default Component;
