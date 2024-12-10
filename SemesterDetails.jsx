import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import "./SemesterDetails.css";

const SemesterDetails = ({ semester, data, onChange }) => {
  const [courses, setCourses] = useState(data);

  useEffect(() => {
    setCourses(data);
  }, [data]);

  const addCourse = () => {
    setCourses([
      ...courses,
      {
        id: courses.length + 1,
        regulationId: "",
        regulationName: "",
        startYear: "",
        endYear: "",
        courseId: "",
        courseCode: "",
        courseName: "",
        semester: "",
        credits: "",
        ltp: "",
      },
    ]);
  };

  const handleInputChange = (e, courseId) => {
    const { name, value } = e.target;
    setCourses((prevCourses) =>
      prevCourses.map((course) =>
        course.id === courseId ? { ...course, [name]: value } : course
      )
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasEmptyFields = courses.some((course) =>
      Object.values(course).some((value) => value === "")
    );
    if (hasEmptyFields) {
      alert("Please fill in all fields before submitting.");
      return;
    }
    onChange(semester, courses);
  };

  return (
    <div className="semester-details-container">
      <h2>Semester Details</h2>
      <form onSubmit={handleSubmit}>
        {courses.map((course) => (
          <div key={course.id} className="course-container">
            <h3 id="course-h3">Course {course.id}</h3>
            {/* Row 1 */}
            <div className="row">
              <div className="input-group">
                <label>Regulation Id</label>
                <input
                  type="number"
                  placeholder="Regulation Id"
                  name="regulationId"
                  value={course.regulationId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Regulation Name</label>
                <input
                  type="text"
                  placeholder="Regulation Name"
                  name="regulationName"
                  value={course.regulationName || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Start Year</label>
                <input
                  type="number"
                  placeholder="Start year"
                  name="startYear"
                  value={course.startYear || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>End Year</label>
                <input
                  type="number"
                  placeholder="End year"
                  name="endYear"
                  value={course.endYear || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
            {/* Row 4 */}
            <div className="row">
              <div className="input-group">
                <label>Course Id</label>
                <input
                  type="number"
                  placeholder="Course Id"
                  name="courseId"
                  value={course.courseId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Course Code</label>
                <input
                  type="text"
                  placeholder="Course Code"
                  name="courseCode"
                  value={course.courseCode || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Course Name</label>
                <input
                  type="text"
                  placeholder="Course Name"
                  name="courseName"
                  value={course.courseName || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Category Id</label>
                <input
                  type="number"
                  placeholder="Category Id"
                  name="categoryId"
                  value={course.categoryId || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
            {/* Row 5 */}
            <div className="row">
              <div className="input-group">
                <label>Semester</label>
                <input
                  type="number"
                  placeholder="Semester"
                  name="semester"
                  value={course.semester || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>Credits</label>
                <input
                  type="number"
                  placeholder="Credits"
                  name="credits"
                  value={course.credits || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
              <div className="input-group">
                <label>LTP</label>
                <input
                  type="text"
                  placeholder="LTP"
                  name="ltp"
                  value={course.ltp || ""}
                  onChange={(e) => handleInputChange(e, course.id)}
                />
              </div>
            </div>
          </div>
        ))}
        <div className="action-buttons">
          <Button variant="outlined" onClick={addCourse}>
            Add Course
          </Button>
          <Button variant="contained" color="success" type="submit">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SemesterDetails;
