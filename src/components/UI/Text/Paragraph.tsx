import React from "react";
import { Container, Paragraph } from "./style";

const Component: React.FC = ({ children }) => {
  return (
    <Container>
      <Paragraph>{children}</Paragraph>
    </Container>
  );
};

export default Component;
