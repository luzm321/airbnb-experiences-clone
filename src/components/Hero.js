//import React from "react";
import "./Hero.css";

const Hero = () => {
    return (
        <section className="hero">
            {/* <img src="../images/photo-grid.png" className="hero--photo" /> */}
            <img src="https://shorttermrentalz.com/wp-content/uploads/2020/06/airbnb-virtual1.png" className="hero--photo" />
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique, interactive, and engaging activities led by 
            one-of-a-kind hosts—all without leaving your home.</p>
        </section>
    )
};

export default Hero;