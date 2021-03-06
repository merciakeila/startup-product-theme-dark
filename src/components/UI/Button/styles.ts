import styled, { css } from "styled-components";
import { Link } from "react-router-dom";


export interface ButtonStyle {
  $isBlack: boolean;
  $isBlue: boolean;
}

export const LinkButton = styled(Link)<ButtonStyle>`
  padding: 20px 60px;
  font-weight: 600;
  font-size: 18px;
  text-align: center;
  border-radius: 2px;
  transition: background-color 0.8s;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$isBlue &&
    css`
      background: var(--secondy);
      color: var(--white);
      border: none;
    `}

  &:hover {
    ${(props) =>
      props.$isBlue &&
      css`
        background: var(--secondy-lighting);
      `}
  }

  ${(props) =>
    props.$isBlack &&
    css`
      background: var(--primary);
      color: var(--white);
      border: 1px solid var(--white);
    `}

  &:hover {
    ${(props) =>
      props.$isBlack &&
      css`
        background: var(--white);
        color: var(--primary);
      `}
  }
`;

export const Button = styled.button<ButtonStyle>`
  background: var(--primary);
  padding: 16px 60px;
  font-weight: 600;
  font-size: 18px;
  color: var(--white);
  border: 1px solid var(--white);
  border-radius: 2px;
  transition: background-color 0.8s;

  ${(props) =>
    props.$isBlack &&
    css`
      background: var(--primary);
      color: var(--white);
      border: 1px solid var(--white);
    `}

  &:hover {
    ${(props) =>
      props.$isBlack &&
      css`
        background: var(--white);
        color: var(--primary);
      `}
  }

  ${(props) =>
    props.$isBlue &&
    css`
      background: var(--secondy);
      color: var(--white);
      border: none;
    `}

  &:hover {
    ${(props) =>
      props.$isBlue &&
      css`
        background: var(--secondy-lighting);
        color: var(--primary);
      `}
  }
`;
