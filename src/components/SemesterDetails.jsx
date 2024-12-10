import React from "react";
import "./SemesterDetails.css";

const SemesterDetails = () => {
  return (
    <div className="semester-container">
      <h1 className="header-semester">Semester Details</h1>
      <div className="form-container">
        <h2 className="course-header">Course 1</h2>
        <form className="form-grid">
          <div className="form-group">
            <label htmlFor="regulation-id">Regulation Id</label>
            <input id="regulation-id" type="text" placeholder="Regulation Id" />
          </div>
          <div className="form-group">
            <label htmlFor="regulation-name">Regulation Name</label>
            <input
              id="regulation-name"
              type="text"
              placeholder="Regulation Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="start-year">Start Year</label>
            <input id="start-year" type="text" placeholder="Start year" />
          </div>
          <div className="form-group">
            <label htmlFor="end-year">End Year</label>
            <input id="end-year" type="text" placeholder="End year" />
          </div>
          <div className="form-group">
            <label htmlFor="credit-count">Credit Count</label>
            <input id="credit-count" type="number" placeholder="Credit Count" />
          </div>
          <div className="form-group">
            <label htmlFor="course-id">Course Id</label>
            <input id="course-id" type="number" placeholder="Course Id" />
          </div>
          <div className="form-group">
            <label htmlFor="course-code">Course Code</label>
            <input id="course-code" type="text" placeholder="Course Code" />
          </div>
          <div className="form-group">
            <label htmlFor="course-name">Course Name</label>
            <input id="course-name" type="text" placeholder="Course Name" />
          </div>
          <div className="form-group">
            <label htmlFor="semester">Semester</label>
            <input id="semester" type="number" placeholder="Semester" />
          </div>
          <div className="form-group">
            <label htmlFor="credits">Credits</label>
            <input id="credits" type="number" placeholder="Credits" />
          </div>
          <div className="form-group">
            <label htmlFor="ltp">LTP</label>
            <input id="ltp" type="number" placeholder="LTP" />
          </div>
        </form>
        <div className="button-container">
          <button className="add-course">Add Course</button>
          <button className="submit">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default SemesterDetails;
