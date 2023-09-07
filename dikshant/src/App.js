import React from "react";
import Intro from "./components/intro";
import "./app.scss"; 
import Skills from "./components/skills";
import Portfolio from "./components/portfolio";
import Achievements from "./components/certificate";
import Contact from "./components/contact";
import Footer from "./components/footer";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Achievements />
            <Contact />
            <Footer />
        </div>
    ); 
};

export default App;
