import React from "react";
import "../css/footer.css"
const Footer = ({ completedTask, totaltask }) => {
  return (
    <div className="footer">
      <span className="item">completedTask:{completedTask} </span>
      <span className="item">totoaltask:{totaltask} </span>
    </div>
  );
};

export default Footer;
