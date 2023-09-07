import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  Asp,
  sih,
  postman,
  jenkins,
  staruml,
  Fend,
  jsc,
  Rbasic,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  
  {
    title: "Figma designer ",
    icon: backend,
  },
  
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Postman",
    icon: postman,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "staruml",
    icon: staruml,
  },
  
];

const experiences = [
  {
    title: "PORTFOLIO",
    company_name: "Technology & Overview",
    icon: reactjs,
    iconBg: "#383E56",
    points: [
      "ThreeJS - a powerful 3D graphics library for rendering and animating the 3D model",
      "React Three Fiber - a popular library for creating 3D graphics with ThreeJS in React",
      "TailwindCSS - a popular utility-first CSS styling framework",
      "Framer Motion - the most popular library used to bring your React website to life with animations",
      "Git hub :",
    ],
  },
  {
    title: "Hostel Management App Design",
    company_name: "Overview",
    icon: figma,
    iconBg: "#E6DEDD",
    points: [
      "Hostel Facilities and Services: The app will provide information on available hostel facilities (e.g., laundry, Gym, Sports) and any services offered (e.g., Canteen, maintenance) to enhance the students' living experience.",
      "Designing Tool : Figma",
    ],
  },
  {
    title: "Online Social Application ",
    company_name: "Asp.net and MVC",
    icon: Asp,
    iconBg: "#383E56",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "College Feedback System",
    company_name: "SIH2022",
    icon: sih,
    iconBg: "#E6DEDD",

    points: [
      "Development of centralized student feedback system, accessible to the HEI, concerned university, and the regulatory bod y for effective monitoring of teaching-learning in the HEI and to have enhanced learning experience for the learners.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Introduction to Front-End Development",
    description:
    "In this course, you'll learn core web development technologies like HTML and CSS, and modern UI frameworks like Bootstrap and React to create interactive user experiences.",
    tags: [
      {
        name: "Html/Css",
        color: "blue-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "Fend",
        color: "pink-text-gradient",
      },
    ],
    image: Fend,
    source_code_link: "https://github.com/",
  },
  {
    name: "Programming with JavaScript",
    description:
    "Learn JavaScript, the programming language behind the modern web. Master functions, objects, arrays, variables, data types, and the HTML DOM. Explore interactive possibilities with modern technologies like Jest for testing.",
    tags: [
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Object handling",
        color: "green-text-gradient",
      },
      {
        name: "Jest Testing ",
        color: "pink-text-gradient",
      },
    ],
    image: jsc,
    source_code_link: "https://github.com/",
  },
  {
    name: "React Basics",
    description:
    "React is a powerful JavaScript library that you can use to build user interfaces for web and mobile applications (apps). In this course, you will explore the fundamental concepts that underpin the React library and learn the basic skills required to build a simple, fast, and scalable app.",
    tags: [
      {
        name: "Components",
        color: "blue-text-gradient",
      },
      {
        name: "props",
        color: "green-text-gradient",
      },
      {
        name: "React Forms",
        color: "pink-text-gradient",
      },
    ],
    image: Rbasic,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
