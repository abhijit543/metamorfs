import React from "react";
import "./Careers.css";
const Careers = () => {
  return (
    <div className="row">
      <div className="col-md-8">
        <h1 className="fw-bold">Careers</h1>
        <hr className="border-warning border-3 opacity-75" style={{ width: "80px" }} />
        <div className="container">
          <p>
            Working with awesome people in an environment that encourages innovation, career and personal development, and rewards you for doing the stuff you love – what could be better than that?
          </p>
          <p>
            We're all human beings working together for the greater good. Our culture reflects this vision and serves to reinforce our shared human values. At <strong>METAMORFS</strong>, we take this
            very seriously and without our culture, we merely exist.
          </p>
          <p>If you have the skills and personality to be the best person you can be, we’d like to chat.</p>
          <p>
            If yes to any one of the above questions, then <strong>METAMORFS</strong> is the right place for you to boost your career to the next level.
          </p>
          <p>
            <strong>We’re located in some of the most dynamic cities in the world - great places where great people do great things.</strong>
          </p>
          <div className="d-flex justify-content-center align-items-center mb-2">
            <a href="/jobs" className="btn btn-warning btn-lg ">
              View Open Positions
            </a>
          </div>
        </div>
      </div>

      <div className="col-md-4 mt-5 job-link">
        <img src="/public/careers/career2.jpg" alt="Careers" className="img-fluid rounded shadow" />
      </div>
    </div>
  );
};

export default Careers;
