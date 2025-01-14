import React from "react";
import PropTypes from "prop-types";

const Button = ({
  onClick,
  bg,
  children,
  border,
  text,
  type = "button",
  className = "",
  py,
  px,
  rounded,
  flex,
  gap,
  cursor,
}) => {
  return (
    <button
      type={type}
      className={`flex items-center ${cursor} ${gap} ${border} ${
        rounded ? `rounded-md` : ""
      } ${py} ${px} ${bg} ${text} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
  bg: PropTypes.string,
  text: PropTypes.string,
  paddingX: PropTypes.string,
  paddingY: PropTypes.string,
  rounded: PropTypes.string,
};

export default Button;
