import React from "react";
import avatar from "../assets/images/avatar.jpg";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Thanawat Srisaeng</span>
        </div>
        <div className="featured-name">
          I'm <span className="TypedText"></span>
        </div>
        <p className="featured-description">
          ฉันเป็นคนที่ชอบเรียนรู้สิ่งใหม่ๆ,และมีความสนใจในเทคโนโลยี,โดยเฉพาะด้านการพัฒนาเว็บไซต์และการเขียนโปรแกรม,
          ฉันเชื่อว่าการทำงานเป็นทีมมีความสำคัญมาก,และมักจะพยายามสื่อสารกับคนรอบข้างเพื่อให้เกิดความเข้าใจที่ดี,
          นอกจากนี้ฉันยังมีความคิดสร้างสรรค์ที่ช่วยให้สามารถแก้ไขปัญหาได้อย่างมีประสิทธิภาพ,ฉันมักจะมองหาความท้าทายใหม่ๆ,
          และไม่กลัวที่จะเผชิญกับอุปสรรค,เพราะฉันเชื่อว่าทุกการทดลองคือโอกาสในการเติบโต,
          ฉันรักการอ่านหนังสือและฟังเพลงเพื่อช่วยให้จิตใจมีความสุขและผ่อนคลาย,และมักจะใช้เวลาว่างในการทำกิจกรรมที่สนุกสนานกับเพื่อนๆและครอบครัว
        </p>

        {/* ปุ่มดาวน์โหลด CV */}
        <div className="featured-text-btn">
          <a href="#" className="btn download-cv-btn">
            <i className="uil uil-file-alt"></i> Download CV
          </a>
        </div>

        {/* ปุ่มโซเชียลมีเดีย */}
        <ul className="social_icons">
          <li>
            <a href="#" className="icon social-icon">
              <i className="uil uil-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon social-icon">
              <i className="uil uil-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon social-icon">
              <i className="uil uil-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="featured-image">
        <div className="image">
          <img src={avatar} alt="avatar" />
        </div>
      </div>

      {/* ปุ่ม Scroll Down */}
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
