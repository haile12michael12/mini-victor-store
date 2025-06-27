import React from "react";
import { FaBookOpen } from "react-icons/fa";
import Register from "../Users/Register";
import PublicPosts from "../Posts/PublicPosts";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const fadeSlideIn = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const listItemHover = {
  whileHover: { scale: 1.05, color: "#22c55e" }, // Tailwind green-500 color hex
  transition: { type: "spring", stiffness: 300 },
};

const Homepage = () => {
  return (
    <div>
      <section className="relative bg-gray-400 overflow-hidden">
        <div className="relative py-20 xl:pt-16 xl:pb-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              {/* Left content with animation */}
              <motion.div
                className="w-full lg:w-1/2 mb-20 lg:mb-0"
                variants={fadeSlideIn}
                initial="hidden"
                animate="visible"
              >
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 font-medium uppercase rounded-full tracking-wide">
               Victor Door Blog
                </span>
                <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight text-gray-900 font-extrabold tracking-tight">
                  Explore the Future with Victor Door
                </h1>
                <ul>
                  {[ 
                    "Unpacking the Latest in Technology and Innovation",
                    "Perfect for a blog focused on cutting-edge technology and trends",
                    "Great if your blog is about sharing innovative and accessible recipes.",
                  ].map((text, idx) => (
                    <motion.li
                      key={idx}
                      className="mb-6 flex items-center cursor-pointer"
                      whileHover={listItemHover.whileHover}
                      transition={listItemHover.transition}
                    >
                      <img
                        className="mr-3 w-8 h-8 object-contain"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDjOum6ZqWsYOm9xwGQVs_EkV9-tRy9G35Qojh9aeB_Q&s"
                        alt="icon"
                      />
                      <p className="text-lg md:text-xl leading-7 text-gray-600 font-medium">
                        {text}
                      </p>
                    </motion.li>
                  ))}
                </ul>
                <Link
                  to="victor-door.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-4 mt-9 inline-flex py-3 px-7 w-full md:w-auto leading-6 text-white font-semibold bg-gradient-to-r from-green-400 to-blue-600 rounded-md shadow-lg
                    hover:from-green-500 hover:to-green-700 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50
                    transform transition-transform duration-500 ease-in-out hover:scale-105 animate-pulse items-center justify-center"
                >
                  <FaBookOpen className="mr-2 text-xl" />
                  visit Now
                </Link>
              </motion.div>

              {/* Register Form with fade & slide from right */}
              <motion.div
                className="w-full lg:w-1/2"
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
                }}
                initial="hidden"
                animate="visible"
              >
                <Register />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Public Posts */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <PublicPosts />
      </motion.div>
    </div>
  );
};

export default Homepage;
