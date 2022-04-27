import React from "react";

const Button = ({ label, hover, bg, border, text }) => {
  return (
    <button
      className={`rounded bg-${bg} px-14 py-4 text-${text} hover:bg-${text} hover:text-${hover} border-${border} border-${text} my-5 uppercase`}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  label: "Hello Motto",
  bg: "transparent",
  border: "0",
  text: "white",
};

export default Button;
