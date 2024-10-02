import React from "react";
const Header = () =>{
    const menufunction =()=>{
        const menuBtn = document.getElementById("myNavMenu");
        if(menuBtn.className === "nav-menu") {
            menuBtn.className += "responsive";
        } else{
            menuBtn.className = "nav-menu"
        }
    };
    return (
        <nav id ="header">
            <div className="nav-logo">
                <p className="nav-name">Thanawat</p>
                <span></span>
            </div>
            <div className="nav-menu">
                <ul className="nav_menu_list">
                    <il><a href="#Home" className="nav-link">
                        Home
                        </a>
                    </il>
                    <il><a href="#About" className="nav-link">
                        About
                        </a>
                    </il>
                    <il><a href="#Project" className="nav-link">
                        Project
                        </a>
                    </il>
                    <il><a href="#Contact" className="nav-link">
                        Contact
                        </a>
                    </il>
                    <div className="nav-button">
                    <button className="btn">
                        Dowload CV
                        <i className ="uil uil-file-info-alt"></i></button>
                    </div>
                    <div className="nav-menu-btn" id="myNavMenu">
                        <i className="uil uil-bars" onClick={menufunction}></i>
                    </div>
                </ul>
            </div>
        </nav>
    );
};

export default Header;