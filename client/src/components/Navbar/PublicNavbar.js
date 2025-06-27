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
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-lg py-0" : "bg-white/90 backdrop-blur-sm py-1"}`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex items-center">
                {/* Mobile menu button */}
                <div className="mr-2 flex items-center md:hidden">
                  <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500">
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
                  <Link to="/" className="flex items-center">
                    <img 
                      src={logo} 
                      alt="Blogify Logo" 
                      className="h-8 w-auto" 
                    />
                    <span className="ml-3 text-xl font-bold text-gray-900 hidden sm:block">
                      <span className="text-teal-600">Victor</span>Door
                    </span>
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:ml-8 md:flex md:items-center md:space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`px-1 pt-1 text-sm font-medium transition-colors duration-200 ${
                        item.current
                          ? "text-teal-600 border-b-2 border-teal-600"
                          : "text-gray-600 hover:text-teal-500"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Search and Actions */}
              <div className="flex items-center space-x-4">
                {/* Search Bar */}
                <div className="hidden md:block relative rounded-md shadow-sm">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  </div>
                  <input
                    type="text"
                    className="block w-full rounded-md border-0 py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
                    placeholder="Search posts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>

                {/* Notification and Profile */}
                <div className="hidden md:flex items-center space-x-3">
                  <button
                    type="button"
                    className="rounded-full p-1 text-gray-600 hover:text-teal-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <RiNotification3Line className="h-6 w-6" aria-hidden="true" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-red-500"></span>
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center text-teal-600">
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
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {authLinks.map((link) => (
                          <Menu.Item key={link.name}>
                            {({ active }) => (
                              <Link
                                to={link.href}
                                className={`block px-4 py-2 text-sm ${
                                  active ? "bg-gray-100" : ""
                                } ${
                                  link.current ? "text-teal-600" : "text-gray-700"
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
                    className="relative inline-flex items-center gap-x-1.5 rounded-md bg-gradient-to-r from-teal-500 to-emerald-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:from-teal-600 hover:to-emerald-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 transition-colors duration-200"
                  >
                    <PlusIcon className="-ml-0.5 h-5 w-5" aria-hidden="true" />
                    <span className="hidden sm:inline">New Post</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Search Bar Mobile */}
              <div className="relative rounded-md shadow-sm mb-4">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" aria-hidden="true" />
                </div>
                <input
                  type="text"
                  className="block w-full rounded-md border-0 py-2 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-500 sm:text-sm sm:leading-6"
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
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    item.current
                      ? "bg-teal-50 text-teal-700"
                      : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
                  }`}
                >
                  {item.name}
                </Disclosure.Button>
              ))}

              <div className="border-t border-gray-200 pt-4">
                {authLinks.map((link) => (
                  <Disclosure.Button
                    key={link.name}
                    as={Link}
                    to={link.href}
                    className={`block rounded-md px-3 py-2 text-base font-medium ${
                      link.current
                        ? "bg-teal-50 text-teal-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-teal-600"
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