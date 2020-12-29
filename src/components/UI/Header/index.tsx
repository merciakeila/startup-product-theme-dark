import React from "react";
import styled from "styled-components";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

const IsDesktop = styled.div`
  @media only screen and (min-width: 961px) {
    display: block;
  }
  @media only screen and (max-width: 960px) {
    display: none;
  }
`;

const IsMobile = styled.div`
  @media only screen and (min-width: 961px) {
    display: none;
  }
  @media only screen and (max-width: 960px) {
    display: block;
  }
`;

const Component: React.FC = () => {
  return (
    <>
      <IsDesktop>
        <Desktop />
      </IsDesktop>

      <IsMobile>
        <Mobile />
      </IsMobile>
    </>
  );
};

export default Component;
