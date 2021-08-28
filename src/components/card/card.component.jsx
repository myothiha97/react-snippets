import React from "react";
import "./card.styles.scss";

const Card = ({ children, bgImg }) => {
  return <div className="card">{children}</div>;
};

export default Card;
