import React from "react";

import "./projects.css"; // Assuming you have a CSS file for styling

const Projects = () => {
  return (
    <>
      <div className="container project">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Top Recent Projects
        </h2>
        <hr />
        <p className="pb-3 text-center">
          👉 here are my top 3 recent projects with live links and source code
        </p>
        {/* Card dsign */}
        <div className="row" id="ads">
          <div className="col-md-4">
            <div className="card rounded">
              <div className="card-image">
                <span className="card-notify-badge">Full stack</span>
                <img src="" alt="project1" />
              </div>
              <div className="card-image-overlay">
                <span className="card-detail-badge">Node</span>
                <span className="card-detail-badge">Express</span>
                <span className="card-detail-badge">react</span>
                <span className="card-detail-badge">Mongodb</span>
              </div>
              <div className="card-body">
                <div className="ad-title">
                  <h5 className="text-uppercase">
                    Techinfoyt Shopping Website
                  </h5>
                </div>
                <a className="ad-btn" href="#">
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
