import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify"; // Import toast from react-toastify
import Loading from "./Loading";

const ServiceDetails = () => {
  const { id } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  const [feedback, setFeedback] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data.JSON");
        const data = await response.json();
        const foundService = data.find((service) => service.service_id === id);
        setService(foundService);
      } catch (error) {
        // console.error("Error fetching service details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const handleSubmitFeedback = () => {
    if (feedback.trim()) {
      setComments((prevComments) => [...prevComments, feedback]);
      setFeedback("");
      toast.success("Feedback submitted successfully!"); 
    } else {
      toast.error("Please write some feedback!"); 
    }
  };

  const handleBookSession = () => {
   
    toast.success("Your session has been booked successfully!"); 
  };

  if (loading) {
    return <Loading />;
  }

  if (!service) {
    return <div>Service not found.</div>;
  }

  return (
    <>
      <section className="grid grid-cols-12 gap-4">
        <div className="col-span-9 shadow-lg p-6 mx-auto mt-10 max-w-3xl">
          <img
            src={service.image}
            alt={service.service_name}
            className="w-full h-96 object-cover mb-6 rounded"
          />
          <div className="flex flex-col gap-2 items-start">
            <h1 className="font-bold text-3xl mb-4 text-[#142E54]">
              {service.service_name}
            </h1>
            <p className="font-semibold">Rating: {service.rating}</p>
            <p>
              <span className="font-semibold">Category:</span>{" "}
              {service.category}
            </p>
            <p>
              <span className="font-semibold">Price:</span> {service.pricing}
            </p>
            <p>
              <span className="font-semibold">Counselor:</span>{" "}
              {service.counselor}
            </p>
            <p className="text-gray-500 text-start">
              {service.description || "No description available."}
            </p>
            <p className="font-semibold">Duration: {service.duration}</p>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <Link
              to="/category/Virtual Counseling Services"
              className="btn bg-[#58B97F] text-white mt-6"
            >
              Back to Category
            </Link>
            <button
              onClick={handleBookSession}
              className="btn bg-[#58B97F] text-white mt-6"
            >
              Book Session
            </button>
            <Link
              to="/category/Virtual Counseling Services"
              className="btn bg-[#58B97F] text-white mt-6"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="col-span-3">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            We value your feedback!
          </h1>
          <input
            type="text"
            name="feedback"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Write your feedback"
            className="w-full h-16 rounded-xl border border-gray-200 p-6"
          />
          <button
            onClick={handleSubmitFeedback}
            className="btn text-white mt-4 w-full bg-[#142E54]"
          >
            SUBMIT
          </button>
        </div>

        {/* Comments Section */}
        <div className="col-span-12 mt-6">
          <h1 className="text-2xl font-semibold mb-4 text-gray-800">
            Comments:
          </h1>
          {comments.length > 0 ? (
            <ul className="list-disc pl-6 space-y-2">
              {comments.map((comment, index) => (
                <li key={index} className="text-gray-700">
                  {comment}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">
              No comments yet. Be the first to comment!
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
