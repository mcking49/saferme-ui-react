import React, { FC } from "react";
import styled from "styled-components";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

const StyledButton = styled.button<ButtonProps>`
  border-color: red;
  border-width: 2px;
  color: cyan;
  padding: 16px 32px;
  border-radius: 8px;
`

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <StyledButton { ...props }>{children}</StyledButton>
}
