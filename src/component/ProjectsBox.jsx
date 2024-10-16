import React from "react";
const ProjectsBox = () =>(
    <section className="section" id="project">
        <div className="top-header">
            <h1>Projects</h1>
        </div>
        <div className="project-container">
            <div className="project-box">
            <i className="uil uil-suitcase-alt"></i>
            <h3>completed</h3>
            <label>0 Finished Projects</label>
            </div>
            <div className="project-box">
            <i className="uil uil-constructor"></i>
            <h3>Clients</h3>
            <label>2 Happy Clients</label>
            </div>
            <div className="project-box">
            <i className="uil uil-folder-network"></i>
            <h3>Experience</h3>
            <label>1 Years in the field</label>
            </div>
        </div>
    </section>
);

export default ProjectsBox;
