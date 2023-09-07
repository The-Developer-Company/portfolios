import React from "react";
import "./style.scss";
import Section from "../shared/section";
import CallToAction from "../shared/CallToAction";
import { AiOutlineCloudDownload } from "react-icons/ai";
import TechIcons from "../../images/tech-icons.png";

// import axios from "axios";
// import fileDownload from "js-file-download";

const Skills = () => {
    // const download = (e) => {
    //     e.preventDefault();
    //     axios({
    //         url: "http://localhost:4000",
    //         method: "GET",
    //         responseType: "blob",
    //     }).then((res) => {
    //         fileDownload(res.data, "resume.pdf");
    //     });
    // };

    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,React,HTML,CSS,NodeJS,MongoDB,Express"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Skills are the most the important aspect of any software
                        developer OR engineer. In order to be a successful
                        software developer, knowledge of different types of
                        technologies is a must. Different skills that I am good
                        with are :- HTML, CSS, JavaScript, SASS, ReactJS,
                        NodeJS, ExpressJS, MongoDB, Figma, MySQL, C, C++, Cyber
                        Security(Kali Linux), JAVA, PHP, GIT, GitHub.
                    </p>

                    <a href="https://drive.google.com/file/d/1TUABf6V1K0SDwHXFYKl3nqaMKZ2xLhiS/view?usp=sharing"        target="_blank" rel="noreferrer"
                        download="Resume.pdf">
                    <CallToAction
                        text="Download CV"
                        // onClick={(e) => download(e)}
                        icon={<AiOutlineCloudDownload />}
                    />
                    </a>
                    
                </div>
            </div>
        </Section>
    );
};

export default Skills;
