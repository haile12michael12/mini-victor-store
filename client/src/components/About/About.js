import React from "react";
import { Link } from "react-router-dom";

const features = [
  "User authentication & profiles",
  "Create, edit, and schedule posts",
  "Commenting system",
  "Category management",
  "Responsive & modern UI",
  "Account verification & password reset",
];

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-2xl w-full bg-slate-900/80 rounded-2xl shadow-2xl p-8 border border-blue-700/30">
        <h1 className="text-4xl font-extrabold text-white mb-4 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Mini Victor Store
        </h1>
        <p className="text-slate-300 text-lg mb-6 text-center">
          Mini Victor Store is a modern blogging platform designed for sharing ideas, stories, and knowledge. Built with a focus on user experience, security, and performance, it empowers users to create, manage, and interact with content seamlessly.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-blue-400 mb-2">Key Features</h2>
          <ul className="list-disc list-inside space-y-2 text-slate-200">
            {features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center mt-8">
          <Link
            to="/"
            className="inline-block px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
