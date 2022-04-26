import React from "react";

const Button = ({ label }) => {
  return (
    <button className="rounded bg-orange px-14 py-4 text-white hover:bg-orange-light my-5">
      {label}
    </button>
  );
};

export default Button;
