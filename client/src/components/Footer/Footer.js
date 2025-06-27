import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin, 
  FaGithub,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";

const socialLinks = [
  { name: "Facebook", href: "#", icon: FaFacebook, color: "hover:text-blue-500" },
  { name: "Twitter", href: "#", icon: FaTwitter, color: "hover:text-sky-500" },
  { name: "Instagram", href: "#", icon: FaInstagram, color: "hover:text-pink-500" },
  { name: "LinkedIn", href: "#", icon: FaLinkedin, color: "hover:text-blue-600" },
  { name: "GitHub", href: "#", icon: FaGithub, color: "hover:text-gray-300" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Posts", href: "/posts" },
  { name: "Categories", href: "/categories" },
  { name: "Contact", href: "/contact" },
];

const supportLinks = [
  { name: "Help Center", href: "/help" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "FAQ", href: "/faq" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      console.log("Subscribed with:", email);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Victor Door
                </h2>
                <p className="text-sm text-slate-400">Blogging Platform</p>
              </div>
            </div>
            <p className="text-slate-300 mb-6 leading-relaxed">
              A modern blogging platform designed for sharing ideas, stories, and knowledge. 
              Built with focus on user experience and performance.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-slate-300">
                <FaEnvelope className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">contact@victordoor.com</span>
              </div>
              <div className="flex items-center text-slate-300">
                <FaPhone className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-slate-300">
                <FaMapMarkerAlt className="w-4 h-4 mr-3 text-blue-400" />
                <span className="text-sm">123 Blog Street, Digital City</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Quick Links
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Support
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h3>
            <ul className="space-y-3">
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-slate-300 hover:text-white transition-colors duration-200 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6 relative">
              Stay Connected
              <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h3>
            
            {/* Newsletter */}
            <div className="mb-6">
              <p className="text-slate-300 text-sm mb-4">
                Subscribe to our newsletter for updates and insights.
              </p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 text-sm rounded-xl bg-slate-800/50 text-white placeholder-slate-400 border border-slate-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </form>
              {isSubscribed && (
                <p className="text-green-400 text-sm mt-2 animate-pulse">
                  ✓ Successfully subscribed!
                </p>
              )}
            </div>

            {/* Social Links */}
            <div>
              <p className="text-slate-300 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 rounded-xl bg-slate-800/50 border border-slate-600 flex items-center justify-center text-slate-300 transition-all duration-200 hover:scale-110 hover:shadow-lg ${social.color}`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} Victor Door. All rights reserved. Made with{" "}
                <FaHeart className="inline w-4 h-4 text-red-500 animate-pulse" />{" "}
                for the community.
              </p>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded-xl border border-slate-600 transition-all duration-200 hover:scale-105"
            >
              <FaArrowUp className="w-4 h-4" />
              <span className="text-sm">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
