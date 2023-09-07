import React from "react";
import "./style.scss";
import Section from "../shared/section";
import {
    FaYoutube,
    FaGithub,
    FaLinkedin,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";
import Logo from "../../images/logo1.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helpers";

const Footer = () => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="Code with darker"
                    />
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("certificates")}
                    >
                        Certificates & Achievements
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#FF0000"
                        icon={<FaYoutube />}
                        link="https://www.youtube.com"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/dikshant-dak"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedin />}
                        link="https://www.linkedin.com/in/dikshant-dak-55247919a/"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://stackoverflow.com/"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/dikshant_dak/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2023 Dikshant Dak | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
