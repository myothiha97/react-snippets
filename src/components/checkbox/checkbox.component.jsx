import React, { useState } from "react";
import "./checkbox.styles.scss";

const CheckBox = () => {
  const [isChecked, toggleCheck] = useState(false);

  return (
    <div
      className={`check-box ${isChecked ? "fill-box" : ""}`}
      onClick={() => toggleCheck(!isChecked)}
    ></div>
  );
};

export default CheckBox;
