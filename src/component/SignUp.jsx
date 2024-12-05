import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { toast } from "react-toastify";

const SignUp = () => {
  const { createNewUser, setUser, updateUserProfile, loginWithGoogle } =
    useContext(AuthContex);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validatePassword = (password) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const isLongEnough = password.length >= 6;

    if (!hasUppercase) {
      return "Password must contain at least one uppercase letter.";
    }
    if (!hasLowercase) {
      return "Password must contain at least one lowercase letter.";
    }
    if (!isLongEnough) {
      return "Password must be at least 6 characters long.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    const form = new FormData(e.target);
    const email = form.get("email");
    const name = form.get("name");
    const photo = form.get("photo");
    const password = form.get("password");

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      toast.error(passwordError);
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Registration successful! Welcome!");
            navigate("/");
          })
          .catch((error) => {
            // console.log("Error: ", error.code, error.message);
            toast.error("Failed to update profile.");
          });
      })
      .catch((error) => {
       // console.log("Error: ", error.code, error.message);
        toast.error("Registration failed. Please try again.");
      });
  };

  // Google login handler
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google login successful!");
      navigate("/");
    } catch (error) {
     // console.error("Google login failed: ", error);
      toast.error("Google login failed. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-start py-12 bg-[#F5F7FA]">
      <div className="card bg-base-100 w-full max-w-md rounded-none p-10">
        <form onSubmit={handleSubmit} className="card-body">
          <h2 className="text-center font-semibold text-2xl">
            Register your account
          </h2>
          {/* Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>

          {/* Photo URL */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your photo URL"
              className="input input-bordered"
              required
            />
          </div>

          {/* Email */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>

          {/* Password */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="password"
              className="input input-bordered pr-10"
              required
            />
            <div
              className="absolute right-2 top-10 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEye /> : <FaEyeSlash />}{" "}
            </div>
          </div>

          {error && <p className="text-red-600 text-sm mt-2">{error}</p>}

          <div className="form-control mt-6">
            <button className="btn btn-neutral rounded-none">Register</button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Already have an account?{" "}
          <Link className="text-red-600" to="/login">
            Login
          </Link>
          <div className="divider">or</div>
          <button
            onClick={handleGoogleLogin}
            className="btn text-white w-3/4 bg-[#58b97f] rounded-none"
          >
            Login with Google
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
