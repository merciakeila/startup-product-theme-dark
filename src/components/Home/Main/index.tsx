import React from "react";
import { Buttons, Container, Dashboard } from "./styles";
import {Paragraph} from '_UI/Text'
import LinkButton from "_UI/Button/LinkButton";
import dashboard from "_assets/dash_home.png";

const Component: React.FC = () => {
  return (
    <>
      <Container>
        <h1>
          Work at the speed
          <br /> of thought
        </h1>
        <Paragraph>
          Most calendars are designed for teams. Slate is designed for
          freelancers who want a simple way to plan their schedule.
        </Paragraph>
        <Buttons>
          <LinkButton isBlue to="/">
            Try For Free
          </LinkButton>
          <LinkButton isBlack to="/">
            Learn More
          </LinkButton>
        </Buttons>
        <Dashboard src={dashboard} alt="calendar dark" />
      </Container>
    </>
  );
};

Component.displayName = "components/Home/main";
export default Component;
