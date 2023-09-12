import React from "react";

const Button = ({ text, style, onClick }) => {
  return (
    <div className="buttonA">
      <button style={style} className="button-on-page" onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
