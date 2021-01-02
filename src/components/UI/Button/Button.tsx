import React, { ButtonHTMLAttributes } from "react";
import { Button } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isBlack?: boolean;
  isBlue?: boolean;
}

const Component: React.FC<ButtonProps> = ({
  children,
  isBlack,
  isBlue,
  ...rest
}) => {
  return (
    <Button {...rest} isBlack={!!isBlack} isBlue={!!isBlue} type="button">
      {children}
    </Button>
  );
};

export default Component;
