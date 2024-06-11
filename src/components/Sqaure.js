import React from "react";

import "../css/Square.css";

const Sqaure = ({ value, onClick }) => {
  return (
    <div className="SquareBg" onClick={() => onClick()}>
      {value}
    </div>
  );
};

export default Sqaure;
