import React from "react";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="NavBar">
      <img
        className="Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
        alt="NetFLix"
      />
      <img
        className="Avatar"
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
        alt="Avatar"
      />
    </div>
  );
}

export default NavBar;
