import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const JobsList = () => {
  const [carjob, setCarJob] = useState([]);
  useEffect(() => {
    fetch("/job/job-data.json")
      .then((response) => response.json())
      .then((data) => setCarJob(data))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);
  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Job Listings</h2>
      <div className="list-group">
        {carjob.map((job) => (
          <div key={job.id} className="list-group-item border rounded mb-3 p-3 shadow-sm">
            <h5 className="fw-bold">{job.title}</h5>
            <p>{job.description}</p>
            <small className="text-muted">
              {job.date} - {job.location}
            </small>
            <Link to={`/jobsdetail/${job.id}`} className="btn btn-dark float-end">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsList;
