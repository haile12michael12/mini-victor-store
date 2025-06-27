import React from "react";
import { FaBookOpen } from "react-icons/fa";
import Register from "../Users/Register";
import PublicPosts from "../Posts/PublicPosts";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

const Homepage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-white via-green-50 to-white overflow-hidden shadow-inner">
        <div className="relative py-20 xl:pt-16 xl:pb-24">
          <div className="container px-4 mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-1/2 mb-20 lg:mb-0 animate-fade-in">
                <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-white bg-green-500 font-semibold uppercase rounded-full">
                  Blogify
                </span>
                <h1 className="mb-6 text-4xl md:text-6xl lg:text-7xl leading-tight text-gray-900 font-bold tracking-tight">
                  Explore the Future with Blogify
                </h1>

                <p className="text-xl text-green-600 font-medium mb-4">
                  <Typewriter
                    words={[
                      "Tech. Innovation. Simplicity.",
                      "Explore the future with every post.",
                      "Create. Share. Inspire."
                    ]}
                    loop={true}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1500}
                  />
                </p>

                <ul className="mb-6 space-y-4">
                  {[
                    "Unpacking the Latest in Technology and Innovation",
                    "Perfect for a blog focused on cutting-edge technology",
                    "Great if your blog shares accessible innovations"
                  ].map((text, index) => (
                    <li className="flex items-start space-x-3" key={index}>
                      <img
                        className="w-7 h-7"
                        src="https://img.icons8.com/ios-filled/50/checked.png"
                        alt="check"
                      />
                      <p className="text-lg text-gray-600">{text}</p>
                    </li>
                  ))}
                </ul>

                <Link
                  to="https://www.udemy.com/course/mern-stack-blogify-project-based-course/?couponCode=08309CBBC4E983226762"
                  className="inline-flex items-center px-6 py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-green-500 to-blue-600 hover:scale-105 transition-all duration-300 rounded-lg shadow-lg"
                >
                  <FaBookOpen className="mr-2" />
                  Enroll Now
                </Link>
              </div>

              {/* Register Form */}
              <div className="w-full lg:w-1/2">
                <Register />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900">Why Blogify?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Empower your content with powerful features.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Real-time Publishing",
                desc: "Publish and update blogs instantly with a live preview editor.",
                icon: "https://img.icons8.com/external-flat-juicy-fish/60/000000/external-speed-web-design-flat-flat-juicy-fish.png"
              },
              {
                title: "User-Friendly Interface",
                desc: "Simple and elegant layout tailored for optimal reader engagement.",
                icon: "https://img.icons8.com/fluency/60/reading.png"
              },
              {
                title: "Secure Authentication",
                desc: "Built with robust MERN stack and modern security practices.",
                icon: "https://img.icons8.com/color/60/lock--v1.png"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center px-6 py-8 bg-gray-50 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                <img src={feature.icon} alt="" className="mx-auto mb-4 w-14 h-14" />
                <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Public Blog Posts */}
      <PublicPosts />
    </div>
  );
};

export default Homepage;
