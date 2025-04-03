import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
const JobDetails = () => {
  const [detailjob, setDetailsJob] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    fetch("/job/job-data.json")
      .then((response) => response.json())
      .then((data) => {
        const selectedJob = data.find((job) => job.id === parseInt(id));
        console.log(selectedJob);

        setDetailsJob(selectedJob);
      });
  }, [id]);
  if (!detailjob) {
    return <p>Loading job details...</p>;
  }
  return (
    <div className="container mt-4">
      <h1 className="fw-bold">{detailjob.title}</h1>
      <hr className="border-warning border-3 opacity-75" style={{ width: "80px" }} />

      <h5 className="fw-bold">Summary:</h5>
      <p>{detailjob.summary}</p>

      <h5 className="fw-bold">Job Responsibilities:</h5>
      <ul>
        {detailjob.job_responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h5 className="fw-bold">Skills:</h5>
      <ul>
        {detailjob.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h5 className="fw-bold">Education/Experience:</h5>
      <p>{detailjob.education_experience}</p>

      <h5 className="fw-bold">Job Post By:</h5>
      <p>{detailjob.job_posted_by}</p>
      <Link to="/jobslist" className="btn btn-warning mb-3">
        Back to Jobs
      </Link>
    </div>
  );
};

export default JobDetails;
