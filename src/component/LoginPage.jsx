import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContex } from "../provider/AuthProvider";
import { toast } from "react-toastify"; 

const LoginPage = () => {
  const { userLogin, setUser, loginWithGoogle } = useContext(AuthContex);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    // SignIn
    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login successful! Welcome back."); 
        navigate(location?.state ? location.state : "/");
      })
      .catch((e) => {
        setError({
          ...error,
          login: e.code,
        });
        toast.error("Login failed. Please check your credentials."); 
      });
  };

  // Handle forgot password link
  const handleForgotPassword = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;
    navigate("/forgotpassword", { state: { email } });
  };

  // Handle Google login
  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google login successful!"); 
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      // console.error("Google login failed: ", error);
      setError({
        ...error,
        googleLogin: error.message,
      });
      toast.error("Google login failed. Please try again."); 
    }
  };

  return (
    <div className="flex justify-center items-start bg-[#F5F7FA] py-12">
      <div className="card bg-base-100 w-full max-w-md rounded-none p-10">
        <form onSubmit={handleLogin} className="card-body">
          <h2 className="text-center font-semibold text-2xl">
            Login your account
          </h2>
          <div className="form-control">
            {/* Email */}
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

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <Link
                onClick={handleForgotPassword}
                className="label-text-alt link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6 space-y-3">
            <button className="btn btn-neutral rounded-none">Login</button>
            <div className="divider">or</div>
            <button
              onClick={handleGoogleLogin}
              className="btn text-white bg-[#58b97f] rounded-none"
            >
              Login with Google
            </button>
          </div>
        </form>
        <p className="text-center font-semibold">
          Don't have an account?{" "}
          <Link className="text-red-600" to="/register">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
