import React from "react";
import "./MainContent.css";
import SemesterDetails from "./SemesterDetails.jsx";

const MainContent = () => {
  return (
    <div className="main-content">
      <div className="buttons">
        <button className="add-course-btn">ADD COURSE</button>
        <button className="submit-btn">SUBMIT</button>
      </div>
    </div>
  );
};

export default MainContent;
