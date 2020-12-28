import React from "react";
import { LinkProps } from "react-router-dom";
import { LinkButton } from "./styles";

interface LinkButton extends LinkProps {
  isBlack?: boolean;
  isBlue?: boolean;
}

const Component: React.FC<LinkButton> = ({
  children,
  isBlack,
  isBlue,
  ...rest
}) => {
  return (
    <>
      <LinkButton {...rest} isBlack={!!isBlack} isBlue={!!isBlue}>
        {children}
      </LinkButton>
    </>
  );
};

export default Component;
