import React from "react";
import { Container, Error} from "./styles";
import page404 from '_assets/404.png'
import {LinkButton} from '_UI/Button/'
import { Paragraph } from "_components/UI/Text";

const Component: React.FC = () => {
  return (
    <>
      <Container>
        <Error src={page404} />
        <div>
          <Paragraph>Oh snap! Youʼre experiencing a glitch</Paragraph>
        </div>
        <LinkButton to="/" isBlack>
          Back Home
        </LinkButton>
      </Container>
    </>
  );
};

Component.displayName = "components/Page/404";
export default Component;
