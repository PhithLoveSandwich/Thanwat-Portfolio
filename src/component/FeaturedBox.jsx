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
            ฉันเป็นคนที่ชอบเรียนรู้สิ่งใหม่ ๆ และมีความสนใจในเทคโนโลยี โดยเฉพาะด้านการพัฒนาเว็บไซต์และการเขียนโปรแกรม ฉันเชื่อว่าการทำงานเป็นทีมมีความสำคัญมาก และมักจะพยายามสื่อสารกับคนรอบข้างเพื่อให้เกิดความเข้าใจที่ดี นอกจากนี้ ฉันยังมีความคิดสร้างสรรค์ที่ช่วยให้สามารถแก้ไขปัญหาได้อย่างมีประสิทธิภาพ ฉันมักจะมองหาความท้าทายใหม่ ๆ และไม่กลัวที่จะเผชิญกับอุปสรรค เพราะฉันเชื่อว่าทุกการทดลองคือโอกาสในการเติบโต ฉันรักการอ่านหนังสือและฟังเพลงเพื่อช่วยให้จิตใจมีความสุขและผ่อนคลาย และมักจะใช้เวลาว่างในการทำกิจกรรมที่สนุกสนานกับเพื่อน ๆ และครอบครัว
            </p>
            </div>
            <div className="featured-text-btn">
                
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