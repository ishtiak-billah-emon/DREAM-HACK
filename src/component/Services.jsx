import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
const Services = () => {
  const { category } = useParams();
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data.JSON")
      .then((res) => res.json())
      .then((data) => {
        const filteredServices = category
          ? data.filter((service) => service.category === category)
          : data;
        setServices(filteredServices);
      });
  }, [category]);


  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      {services.map((service, index) => (
        <div key={index} className="card flex flex-col shadow-lg p-4 bg-[#F9F9F9]">
          <img
            src={service.image}
            alt={service.service_name}
            className="w-full h-72 object-cover mb-4 rounded"
          />
          <h3 className="font-semibold text-lg text-[#2C3E50]">
            {service.service_name}
          </h3>
          <p className="text-sm text-[#7D7D7D]">{service.category}</p>
          <p className="text-[#58B97F] font-bold mt-2">
            {" "}
            <strong>Price: </strong>
            {service.pricing}
          </p>
          <p className="text-sm text-gray-700 mt-2">
            <strong>Counselor:</strong> {service.counselor}
          </p>
          {/* <button
            onClick={() => handleViewDetails(service)}
           
            className="btn btn-primary mt-4"
          >
            Learn More
          </button> */}
          <Link
            to={`/category/service/${service.service_id}`} // Use absolute path
            className="btn bg-[#58B97F] mt-4 text-[#FFFFFF]"
          >
            Learn More
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
