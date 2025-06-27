import { useState } from "react";

const navigation = [
 
];

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo / About */}
          <div>
            <h2 className="text-2xl font-bold">victor door</h2>
            <p className="mt-2 text-sm text-gray-400">
              SECURELY ELEGANCE .
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li><a href="/about" className="hover:underline text-gray-400">About Us</a></li>
              <li><a href="/courses" className="hover:underline text-gray-400">posts</a></li>
              <li><a href="/blog" className="hover:underline text-gray-400">Blog</a></li>
              <li><a href="/contact" className="hover:underline text-gray-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Icons */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Follow Us
            </h3>
            <div className="mt-4 flex space-x-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">
              Newsletter
            </h3>
            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col sm:flex-row sm:items-center sm:space-x-2">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 text-sm rounded-md bg-gray-800 text-white placeholder-gray-400 border border-gray-600 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 sm:mt-0 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold rounded-md transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Victory Door Notice Board. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
