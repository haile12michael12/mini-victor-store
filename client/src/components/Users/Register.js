import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerAction } from "../../redux/slices/users/usersSlices";
import ErrorMsg from "../Alert/ErrorMsg";
import SuccesMsg from "../Alert/SuccesMsg";
import LoadingComponent from "../Alert/LoadingComponent";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { motion } from "framer-motion";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAction(formData));
    setFormData({ email: "", password: "", username: "" });
  };

  const { user, error, isRegistered, loading } = useSelector(
    (state) => state?.users
  );

  useEffect(() => {
    if (user?.status === "success") {
      navigate("/login");
    }
  }, [user?.status]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100">
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white shadow-2xl rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-4 text-3xl font-bold text-green-600 text-center">
          Join Our Community
        </h2>
        <p className="mb-6 text-center text-gray-500">
          Meet like-minded people and grow together
        </p>

        {error && <ErrorMsg message={error?.message} />}
        {isRegistered && <SuccesMsg message="Register Success" />}

        {/* Username Field */}
        <div className="relative mb-4">
          <FaUser className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            className="w-full py-3 pl-11 pr-4 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Email Field */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full py-3 pl-11 pr-4 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Password Field */}
        <div className="relative mb-4">
          <FaLock className="absolute left-4 top-3.5 text-gray-400" />
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full py-3 pl-11 pr-10 border rounded-lg text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <span
            onClick={togglePassword}
            className="absolute right-4 top-3.5 cursor-pointer text-sm text-green-500"
          >
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>

        {loading ? (
          <LoadingComponent />
        ) : (
          <button
            type="submit"
            className="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition duration-200 shadow-md"
          >
            Get Started
          </button>
        )}

        <p className="mt-6 text-sm text-gray-500 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-green-600 hover:underline">
            Sign In
          </Link>
        </p>
      </motion.form>
    </section>
  );
};

export default Register;
