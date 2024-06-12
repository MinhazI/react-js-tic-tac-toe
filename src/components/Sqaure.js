import React from "react";

import "../css/Square.css";

const Square = ({ value, onClick }) => {
  return (
    <div className="SquareBg" onClick={() => onClick()}>
      {value}
    </div>
  );
};

export default Square;
