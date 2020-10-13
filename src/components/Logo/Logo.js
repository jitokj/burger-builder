import React from "react";
import classes from "./Logo.css";

import burgerLogo from "../../assets/images/burger.png";

const logo = (props) => (
  <div className={classes.Logo} style={{ height: props.height }}>
    <img src={burgerLogo} alt="Logo" />
  </div>
);

export default logo;