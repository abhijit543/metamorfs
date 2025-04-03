import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const JobsList = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const jobsPerPage = 5;
  const [carjob, setCarJob] = useState([]);

  useEffect(() => {
    fetch("/job/job-data.json")
      .then((response) => response.json())
      .then((data) => setCarJob(data))
      .catch((error) => console.error("Error loading jobs:", error));
  }, []);

  // Calculate jobs for the current page
  const offset = currentPage * jobsPerPage;

  const currentJobs = carjob.slice(offset, offset + jobsPerPage);

  const pageCount = Math.ceil(carjob.length / jobsPerPage);

  const handlePageClick = ({ selected }) => {
    console.log(selected);
    setCurrentPage(selected);
  };

  return (
    <div className="container mt-4">
      <h2 className="fw-bold">Job Listings</h2>
      <div className="list-group">
        {currentJobs.map((job) => (
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

      {/* Pagination Component */}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center mt-3"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default JobsList;
