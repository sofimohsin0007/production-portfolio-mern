import React from "react";
import "./about.css"; // Assuming you have a CSS file for styling

const About = () => {
  return (
    <>
      <div className="about">
        <div className="row">
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt="profile pic"
            />
          </div>
          <div className="col-md-6 col-xl-6 col-lg-6 col-xs-12 about-content">
            <h1>About me</h1>
            <p>
              Hi, I'm a Fullstack Developer with a passion for creating dynamic
              and responsive web applications. I have experience in both
              frontend and backend technologies, and I'm always eager to learn
              new skills and improve my craft.
            </p>
            <p>
              My journey in web development started with a curiosity about how
              websites work. Over the years, I've honed my skills in various
              programming languages and frameworks, allowing me to build
              full-fledged applications from scratch.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
