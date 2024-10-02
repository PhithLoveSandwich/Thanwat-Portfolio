import React from "react";

const Header = () => {
  const menufunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav_menu_list") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav_menu_list";
    }
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">Thanawat</p>
        <span></span>
      </div>
      <div className="nav-menu">
        <ul className="nav_menu_list" id="myNavMenu">
          <li><a href="#Home" className="nav-link">Home</a></li>
          <li><a href="#About" className="nav-link">About</a></li>
          <li><a href="#Project" className="nav-link">Project</a></li>
          <li><a href="#Contact" className="nav-link">Contact</a></li>
        </ul>
        <div className="nav-button">
          <button className="btn">
            Download CV <i className="uil uil-file-info-alt"></i>
          </button>
        </div>
        <div className="nav-menu-btn" onClick={menufunction}>
          <i className="uil uil-bars"></i>
        </div>
      </div>
    </nav>
  );
};

export default Header;
