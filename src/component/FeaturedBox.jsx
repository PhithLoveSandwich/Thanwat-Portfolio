import React from "react";
import avatar from "../assets/images/avatar.jpg";
const FeaturedBox = () =>{
    return (        
    <section className="featured-box" id="home">
            <div className="featured-text">
                <div className="featured-text-card">
                    <span>Thanawat Srisaeng</span>
                </div>
                <div className="featured-name">
                    I'm<span className="TypedText"></span>
                </div>
            <div className="featured-text-info">
            </div>
            <p>
                ทดสอบ
            </p>
            </div>
            <div className="featured-text-btn">
                <button className="btn">Dowload CV<i className="uil uil-import"></i></button>
            </div>
            <div className="social_icons">
                <div className="icom">

                </div>
            </div>
            <div className="image">
                <img src={avatar} alt="avatar"/>
            </div>
            <div className="scroll-icon-box">
                <a href="#about" className="scroll-btn">
                    <i className="uil uil-mouse-alt"></i>
                    <p>Scroll Down</p>
                </a>
            </div>
    </section>
        );
};
    
export default FeaturedBox;
