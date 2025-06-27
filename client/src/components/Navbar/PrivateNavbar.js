import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BellIcon, MoonIcon, SunIcon, PlusIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { FaBlog } from "react-icons/fa";
import { logoutAction } from "../../redux/slices/users/usersSlices";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {
  const { userAuth } = useSelector((state) => state?.users);
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useState(false);

  const logoutHandler = () => {
    dispatch(logoutAction());
    window.location.reload();
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
    // You can integrate Tailwind dark mode here if needed
  };

  return (
    <Disclosure as="nav" className="bg-slate-900/95 backdrop-blur-xl shadow-2xl border-b border-slate-700/50 z-50 sticky top-0">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between items-center">
              {/* Left section */}
              <div className="flex items-center space-x-6">
                <Disclosure.Button className="md:hidden p-2.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-all duration-200">
                  {open ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
                </Disclosure.Button>

                <Link to="/" className="flex items-center gap-3 group">
                  <div className="relative">
                    <FaBlog className="text-blue-400 h-8 w-8 group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <span className="text-xl font-bold text-white hidden sm:block">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Victor</span>
                    <span className="text-slate-200">Blog</span>
                  </span>
                </Link>

                <div className="hidden md:flex space-x-8 ml-8">
                  <Link to="/" className="text-slate-300 hover:text-white font-medium transition-colors duration-200 hover:bg-slate-800/50 px-3 py-2 rounded-lg">Home</Link>
                  <Link to="/posts" className="text-slate-300 hover:text-white font-medium transition-colors duration-200 hover:bg-slate-800/50 px-3 py-2 rounded-lg">Posts</Link>
                </div>
              </div>

              {/* Right section */}
              <div className="flex items-center space-x-6">
                {/* Add Post */}
                <Link
                  to="/add-post"
                  className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-xl shadow-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <PlusIcon className="h-5 w-5" />
                  Add Post
                </Link>

                {/* Notifications */}
                <div className="relative group">
                  <button className="relative p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-200">
                    <BellIcon className="h-6 w-6 text-slate-300 group-hover:text-white" />
                    <span className="absolute top-2 right-2 block h-3 w-3 rounded-full bg-red-500 animate-pulse" />
                    <span className="absolute top-2 right-2 block h-3 w-3 rounded-full bg-red-500" />
                  </button>
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-slate-800 px-2 py-1 rounded">Notifications</span>
                </div>

                {/* Dark Mode Toggle */}
                <button
                  onClick={toggleDarkMode}
                  className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-all duration-200"
                >
                  {darkMode ? <SunIcon className="h-5 w-5 text-yellow-400" /> : <MoonIcon className="h-5 w-5 text-slate-300" />}
                </button>

                {/* User Menu */}
                <Menu as="div" className="relative">
                  <Menu.Button className="relative">
                    <img
                      className="h-10 w-10 rounded-xl ring-2 ring-blue-500 shadow-lg hover:ring-purple-500 transition-all duration-200"
                      src={
                        userAuth?.userInfo?.profilePicture ||
                        "https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_1280.png"
                      }
                      alt="User avatar"
                    />
                    <span className="absolute bottom-0 right-0 block h-3 w-3 bg-green-500 rounded-full ring-2 ring-slate-900" />
                  </Menu.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 mt-3 w-56 bg-slate-800 rounded-xl shadow-xl ring-1 ring-slate-700 py-2 z-20">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/user-profile"
                            className={classNames(active && "bg-slate-700", "block px-4 py-3 text-sm text-slate-300 hover:text-white transition-colors duration-200")}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="/update-profile"
                            className={classNames(active && "bg-slate-700", "block px-4 py-3 text-sm text-slate-300 hover:text-white transition-colors duration-200")}
                          >
                            Settings
                          </Link>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={logoutHandler}
                            className={classNames(active && "bg-slate-700", "w-full text-left block px-4 py-3 text-sm text-slate-300 hover:text-red-400 transition-colors duration-200")}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <Disclosure.Panel className="md:hidden px-4 pt-4 pb-6 space-y-2 bg-slate-800/50 backdrop-blur-xl border-t border-slate-700">
            <Link to="/" className="block text-slate-300 hover:text-white hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-200">Home</Link>
            <Link to="/posts" className="block text-slate-300 hover:text-white hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-200">Posts</Link>
            <Link to="/add-post" className="block text-blue-400 font-semibold hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-200">Add New Post</Link>
            <Link to="/user-profile" className="block text-slate-300 hover:text-white hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-200">Your Profile</Link>
            <Link to="/update-profile" className="block text-slate-300 hover:text-white hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-200">Settings</Link>
            <button onClick={logoutHandler} className="block text-slate-300 hover:text-red-400 hover:bg-slate-700 px-4 py-3 rounded-xl transition-all duration-200 w-full text-left">Sign out</button>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
