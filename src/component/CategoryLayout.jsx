import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const CategoryLayout = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/data.JSON")
      .then((res) => res.json())
      .then((data) => {
        const categoryName = [...new Set(data.map((item) => item.category))];
        setCategories(categoryName);
      });
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-semibold mb-3 text-[#2E8B57]">
        {/* All Categories ({categories.length}) */}
        Explore Our Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4 bg-[#F4F9F9] p-6">
        {categories.map((category, index) => (
          <NavLink
            to={`/category/${category}`}
            className={({ isActive }) =>
              `btn text-xl text-[#2C3E50]  md:h-32 ${
                isActive
                  ? "bg-[#58B97F] text-white"
                  : "bg-[#A8D8E5] hover:bg-gray-300"
              }`
            }
            key={index}
          >
            {category}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default CategoryLayout;
