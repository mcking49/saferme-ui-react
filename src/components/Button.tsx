import React, { FC } from "react";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <button style={{borderColor: 'red', borderWidth: "2px", color: 'green', padding: '16px', borderRadius: '8px'}} { ...props }>{children}</button>
}
