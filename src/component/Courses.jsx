import React, { useState, useEffect } from "react";
import Loading from "../component/Loading";
import CourseDetails from "./CourseDetails";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("courses.JSON")
      .then((res) => res.json())
      .then((data) => {
        setCourses(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="courses-container p-6">
      <h1 className="text-3xl font-bold text-[#003366] mb-6">
        Available Courses
      </h1>
      {courses.length === 0 ? (
        <p>No courses available at the moment. Please check back later.</p>
      ) : (
        <div className="flex flex-col gap-12">
          {courses.map((course, index) => (
            <CourseDetails key={index} course={course} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Courses;
