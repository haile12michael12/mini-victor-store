import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginAction } from "../../redux/slices/users/usersSlices";
import LoadingComponent from "../Alert/LoadingComponent";
import ErrorMsg from "../Alert/ErrorMsg";
import SuccesMsg from "../Alert/SuccesMsg";
import { FaUser, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAction({ ...formData }));
    setFormData({ password: "", username: "" });
  };

  const { userAuth, loading, error, isLogin } = useSelector(
    (state) => state?.users
  );

  useEffect(() => {
    if (error?.message === "Token expired/Invalid") {
      navigate("/login");
    }
  }, [error?.message]);

  useEffect(() => {
    if (userAuth?.userInfo?.token && error?.message !== "Token expired/Invalid") {
      navigate("/user-profile");
    }
  }, [userAuth?.userInfo?.token]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <motion.div
        className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-4xl font-bold text-indigo-600 text-center">
          Welcome Back
        </h2>
        <p className="mb-6 text-center text-gray-500">
          Login to your account and continue exploring.
        </p>

        {error && <ErrorMsg message={error?.message} />}
        {isLogin && <SuccesMsg message="Login Success" />}

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Username Field */}
          <div className="relative">
            <FaUser className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full py-3 pl-11 pr-4 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-4 top-3.5 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3 pl-11 pr-10 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <span
              onClick={togglePassword}
              className="absolute right-4 top-3.5 cursor-pointer text-sm text-indigo-500"
            >
              {showPassword ? "Hide" : "Show"}
            </span>
          </div>

          {/* Submit Button */}
          {loading ? (
            <LoadingComponent />
          ) : (
            <button
              type="submit"
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-200 shadow-md"
            >
              Login
            </button>
          )}
        </form>

        {/* Forgot + Register Links */}
        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            <Link
              to="/forgot-password"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Forgot Password?
            </Link>
          </p>
          <p className="mt-2">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-indigo-600 hover:text-indigo-800 font-medium"
            >
              Register here
            </Link>
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Login;
