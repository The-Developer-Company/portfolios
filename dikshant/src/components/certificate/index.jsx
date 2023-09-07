import React from "react";
import "./style.scss";
import Section from "../shared/section";
import Blog1 from "../../images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../images/blogs/blog-thumb-3.jpg";
import AchievementCard from "./certificate-card";

const Achievements = () => {
    return (
        <Section
            id="certificates"
            title="Certificates & Achievements"
            background="dark"
        >
            <div className="certificates-content-wrapper">
                <AchievementCard
                    user="Dikshant Dak"
                    date="Mar 8 2022"
                    image={Blog1}
                    title="JavaScript Basics & Advanced"
                    description="Complete JavaScript with ES syntax"
                />
                <AchievementCard
                    user="Dikshant Dak"
                    date="Mar 8 2022"
                    image={Blog2}
                    title="ReactJS"
                    description="React JS- Complete Guide for Frontend Web Development"
                />
                <AchievementCard
                    user="Dikshant Dak"
                    date="Mar 8 2022"
                    image={Blog3}
                    title="Cyber Security"
                    description="Introduction to Cyber Security Tools & Cyber Attacks"
                />
            </div>
        </Section>
    );
};

export default Achievements;
