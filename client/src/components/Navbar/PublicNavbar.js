import { Fragment, useState, useEffect } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { PlusIcon, MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Link, useLocation } from "react-router-dom";
import { RiNotification3Line } from "react-icons/ri";
import logo from "../../assets/victory.jpg"; 

export default function PublicNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  const navigation = [
    { name: "Home", href: "/", current: isActive("/") },
    { name: "Posts", href: "/posts", current: isActive("/posts") },
    { name: "Categories", href: "/categories", current: isActive("/categories") },
    { name: "About", href: "/about", current: isActive("/about") },
  ];

  const authLinks = [
    { name: "Login", href: "/login", current: isActive("/login") },
    { name: "Register", href: "/register", current: isActive("/register") },
  ];

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-500 ${
      scrolled 
        ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50" 
        : "bg-slate-900/80 backdrop-blur-md"
    }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <div className="mr-4 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-lg p-2.5 text-slate-300 hover:bg-slate-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>

                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="flex items-center group">
                    <div className="relative">
                      <img 
                        src={logo} 
                        alt="VictorDoor Logo" 
                        className="h-10 w-auto rounded-lg shadow-lg group-hover:scale-105 transition-transform duration-300" 
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <span className="ml-4 text-2xl font-bold text-white hidden sm:block">
                      <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Victor</span>
                      <span className="text-slate-200">Door</span>
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:ml-12 md:flex md:items-center md:space-x-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                        item.current
                          ? "text-white bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                          : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                      }`}
                    >
                      {item.name}
                      {item.current && (
                        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Search and Actions */}
              <div className="flex items-center space-x-6">
                {/* Search Bar */}
                <div className="hidden lg:block relative">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                    <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="block w-80 rounded-xl border-0 py-3 pl-12 pr-4 text-white bg-slate-800/50 ring-1 ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 focus:bg-slate-800 transition-all duration-300 sm:text-sm"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Notification and Profile */}
                <div className="hidden md:flex items-center space-x-4">
                  <button
                    type="button"
                    className="relative rounded-xl p-3 text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-all duration-200"
                  >
                    <span className="sr-only">View notifications</span>
                    <RiNotification3Line className="h-6 w-6" aria-hidden="true" />
                    <span className="absolute top-2 right-2 h-3 w-3 rounded-full bg-red-500 animate-pulse"></span>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-xl bg-slate-800 p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-slate-900 hover:bg-slate-700 transition-all duration-200">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-white shadow-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-3 w-56 origin-top-right rounded-xl bg-slate-800 py-2 shadow-xl ring-1 ring-slate-700 focus:outline-none">
                        {authLinks.map((link) => (
                          <Menu.Item key={link.name}>
                            {({ active }) => (
                              <Link
                                to={link.href}
                                className={`block px-4 py-3 text-sm transition-colors duration-200 ${
                                  active ? "bg-slate-700 text-white" : "text-slate-300"
                                } ${
                                  link.current ? "text-blue-400 font-medium" : ""
                                }`}
                              >
                                {link.name}
                              </Link>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>

                {/* Create Post Button */}
                <div className="flex-shrink-0">
                  <Link
                    to="/add-post"
                    className="relative inline-flex items-center gap-x-2 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:from-blue-600 hover:to-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  >
                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                    <span className="hidden sm:inline">New Post</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-2 px-4 pb-6 pt-4 bg-slate-800/50 backdrop-blur-xl">
              {/* Search Bar Mobile */}
              <div className="relative rounded-xl shadow-sm mb-6">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                  <MagnifyingGlassIcon className="h-4 w-4 text-slate-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-xl border-0 py-3 pl-12 pr-4 text-white bg-slate-800 ring-1 ring-slate-700 placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 sm:text-sm"
                  placeholder="Search posts..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as={Link}
                  to={item.href}
                  className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                    item.current
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                      : "text-slate-300 hover:bg-slate-700 hover:text-white"
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <div className="border-t border-slate-700 pt-4 mt-4">
                {authLinks.map((link) => (
                  <Disclosure.Button
                    key={link.name}
                    as={Link}
                    to={link.href}
                    className={`block rounded-xl px-4 py-3 text-base font-medium transition-all duration-200 ${
                      link.current
                        ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-white border border-blue-500/30"
                        : "text-slate-300 hover:bg-slate-700 hover:text-white"
                    }`}
                  >
                    {link.name}
                  </Disclosure.Button>
                ))}
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}