import React, { useState } from 'react';
import "./style.scss";
import Section from '../shared/section';
import Filters from './filter';
import Showcase from './showcase';

const projectsData = [
    {
        id: 1,
        name: "Gadgets Destination",
        tags: ["web-app", "mobile-app", "products"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-7.png"),
        },
    },
    {
        id: 2,
        name: "KnightNews",
        tags: ["web-page", "web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-2.png"),
        },
    },
    {
        id: 3,
        name: "Marvel Movies & Series",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-8.png"),
        },
    },
    {
        id: 4,
        name: "Weather-App",
        tags: ["web-app", "mobile-app", "web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-1.png"),
        },
    },
    {
        id: 5,
        name: "YouTube Clone",
        tags: ["web-app", "web-page", "mobile-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-6.png"),
        },
    },
    {
        id: 6,
        name: "Portfolio",
        tags: ["web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-4.png"),
        },
    },
    {
        id: 7,
        name: "TextUtils - A Notes Diary",
        tags: ["web-app"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-3.png"),
        },
    },
    {
        id: 8,
        name: "Gadgets Destination",
        tags: ["products", "web-page"],
        media: {
            thumbnail: require("../../images/portfolio/thumb-5.png"),
        },
    },
]

const Portfolio = () => {
    const [projects, setprojects] = useState(projectsData);
    const [transition, setTransition] = useState(false);

    const filterProjects = (tag) => {
        setTransition("zoomOut");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) => 
                    f.tags.includes(tag)
                );
                setprojects(filteredProjects);
            } else {
                setprojects(projectsData);
            }
            setTransition("zoomIn");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

  return (
    <Section 
        id="portfolio"
        title="Check my Portfolio"
        background="light"
    >
        <div className="portfolio-content-wrapper">
            <Filters filterProjects={(tag) => filterProjects(tag)} />
            <Showcase
                data={projects} 
                transition={transition}
            />
        </div>
    </Section>
  )
}

export default Portfolio;
