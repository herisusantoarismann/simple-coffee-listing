import React from "react";

const Button = ({ isActive, onClick, children }) => {
  return (
    <button
      className={`py-2 px-4 text-sm text-[#FEF7EE] font-bold rounded-lg ${
        isActive ? "bg-[#6F757C]" : "bg-transparent"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
