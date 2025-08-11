import React from "react";
import {
  FcAbout,
  FcBiotech,
  FcBusinessContact,
  FcHome,
  FcPortraitMode,
  FcReadingEbook,
  FcVideoProjector,
  FcVoicePresentation,
} from "react-icons/fc"; // Importing an icon for demonstration
import "./menus.css"; // Assuming you have a CSS file for styling

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <div className="navbar-profile-pic">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
              alt="profile pic"
            />
          </div>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome />
                Home
              </div>
              <div className="nav-link">
                <FcAbout />
                About
              </div>
              <div className="nav-link">
                <FcPortraitMode />
                Work Experience
              </div>
              <div className="nav-link">
                <FcBiotech />
                Tech Stack
              </div>
              <div className="nav-link">
                <FcReadingEbook />
                Education
              </div>
              <div className="nav-link">
                <FcVideoProjector />
                Projects
              </div>
              <div className="nav-link">
                <FcVoicePresentation />
                Testimonial
              </div>
              <div className="nav-link">
                <FcBusinessContact />
                Contact
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="nav-items">
          <div className="nav-item">
            <div className="nav-link">
              <FcHome title="Home" />
            </div>
            <div className="nav-link">
              <FcAbout title="About" />
            </div>
            <div className="nav-link">
              <FcPortraitMode title="Work Experience" />
            </div>
            <div className="nav-link">
              <FcBiotech title="Tech Stack" />
            </div>
            <div className="nav-link">
              <FcReadingEbook title="Education" />
            </div>
            <div className="nav-link">
              <FcVideoProjector title="Projects" />
            </div>
            <div className="nav-link">
              <FcVoicePresentation title="Testimonial" />
            </div>
            <div className="nav-link">
              <FcBusinessContact title="Contact" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Menus;
