import React from "react";
import cv from "../assets/dowload/Port.pdf";
const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>About Me</h1>
      </div>
      <div className="row">
        {/** About Me */}
        <div className="col">
          <div className="about-info">
            <h3>My Introduction</h3>
            <p>
              ฉันเชื่อว่าการทำงานเป็นทีมมีความสำคัญมาก,และมักจะพยายามสื่อสารกับคนรอบข้างเพื่อให้เกิดความเข้าใจที่ดี,
              นอกจากนี้ฉันยังมีความคิดสร้างสรรค์ที่ช่วยให้สามารถแก้ไขปัญหาได้อย่างมีประสิทธิภาพ,ฉันมักจะมองหาความท้าทายใหม่ๆ,
              และไม่กลัวที่จะเผชิญกับอุปสรรค,เพราะฉันเชื่อว่าทุกการทดลองคือโอกาสในการเติบโต,
              ฉันรักการอ่านหนังสือและฟังเพลงเพื่อช่วยให้จิตใจมีความสุขและผ่อนคลาย,และมักจะใช้เวลาว่างในการทำกิจกรรมที่สนุกสนานกับเพื่อนๆและครอบครัว
            </p>
          <div className="about-btn">
            <a href={cv}>
              <button className="btn">
                Download CV <i className="uil uil-file-info-alt"></i>
              </button>
            </a>
          </div>
          </div>
        </div>
        {/** Skill */}
        <div className="col">
          <div className="skills-box">
            <div className="skill-header">
              <h3>Frontend</h3>
            </div>
            <div className="skills-list">
              <span>Html</span>
              <span>CSS</span>
              <span>VUE</span>
              <span>JAVASCRIPT</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skill-header">
              <h3>Blackend</h3>
            </div>
            <div className="skills-list">
              <span>Node</span>
              <span>Java</span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skill-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MySql</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBox;
