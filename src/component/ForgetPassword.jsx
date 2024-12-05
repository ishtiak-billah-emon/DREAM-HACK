import React, { useContext, useEffect, useState } from "react";
import { AuthContex } from "../provider/AuthProvider";
import { useLocation } from "react-router-dom";
import { toast } from "react-toastify";

const ForgetPassword = () => {
  const { passwordReset } = useContext(AuthContex);
  const location = useLocation();
  const [email, setEmail] = useState(location.state?.email || "");

  const handleSubmit = (e) => {
    e.preventDefault();

    passwordReset(email)
      .then(() => {
        toast.success("Reset Password Email has sent");
      })
      .catch((err) => {
        // console.log("Error:", err.message);
         toast.error("Error:", err.message);
      });
  };

  return (
    <div className="w-1/3 mx-auto">
      <form
        onSubmit={handleSubmit}
        className="card-body p-6 bg-gray-100 rounded-3xl"
      >
        <div className="form-control mb-4">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            name="emailField"
            className="input input-bordered"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>

        <button className="btn  bg-[#58b97f] text-white hover:bg-[#6cbc7c]">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgetPassword;
