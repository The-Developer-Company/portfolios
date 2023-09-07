import React from "react";
import "./style.scss";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import img1 from "../../../images/img1.png";
import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import { scrollToSection } from "../../utils/helpers";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt=""
                                />
                            </span>
                            <span className="text">, I Am</span>
                        </span>
                        <span className="big-text"> DIKSHANT DAK</span>
                    </h1>
                    <p>
                        I am a software developer basically a frontend and
                        backend developer specialized in ReactJS and other
                        frontend development skills
                    </p>
                    <CallToAction text="Contact me" action={() => scrollToSection("contact")} />
                </div>
                <div className="right-col">
                    <img
                        src={img1}
                        alt=""
                    />

                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Specialized in ReactJS</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">Numerous Projects</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
