import React, { type FC } from "react";
import { ButtonProps } from "./Button.types";
import "./Button.css";

export const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    size = "md",
    type = "button",
    btnType = "primary",
    className,
    onClick,
    shape = "default",
    styles,
    isDarkMode = false,
  } = props;
  return (
    <button
      type={type}
      className={`button ${size} ${btnType} ${shape} ${isDarkMode === true && `dark`} ${className}`}
      style={styles}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
