import React from "react";
import "./logo.scss";
type ButtonProps = {
  variant: "primary" | "secondary" | "border";
  disabled: boolean;
  onClick: () => void;
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button
      className=""
      onClick={onClick}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
