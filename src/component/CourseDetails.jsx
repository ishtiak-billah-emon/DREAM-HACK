import React from "react";
import { toast } from "react-toastify";

const CourseDetails = ({ course }) => {
  const handleClaimCourse = () => {
   toast.success(`You have successfully claimed the course: ${course.course_name}`);

  };

  return (
    <div className="course-card bg-white shadow-lg rounded-lg p-4 flex flex-col md:flex-row items-start gap-4">
      {/* Course Image */}
      <div className="course-image w-24 h-24 bg-gray-200 rounded-lg">
        <img
          src={course.image_url}
          alt={`${course.course_name}`}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      {/* Course Details */}
      <div className="course-info flex-1">
        <h2 className="text-xl font-bold text-gray-800">
          {course.course_name}
        </h2>
        <p className="text-sm text-gray-600">{course.description}</p>
        <div className="mt-2 text-gray-700 text-sm">
          <p>
            <strong>Instructor:</strong> {course.instructor}
          </p>
          <p>
            <strong>Duration:</strong> {course.duration}
          </p>
          <p>
            <strong>Level:</strong> {course.level}
          </p>
          <p>
            <strong>Category:</strong> {course.category}
          </p>
        </div>
      </div>

      <div className="course-meta flex flex-col items-center md:items-end gap-2">
        <span className="bg-green-200 text-green-800 text-xs font-bold px-2 py-1 rounded">
          {course.level}
        </span>
        {course.completion_certificate && (
          <span className="text-sm text-gray-500">Certificate Available</span>
        )}
        {/* Claim Button */}
        <button
          onClick={handleClaimCourse}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Claim this course
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
