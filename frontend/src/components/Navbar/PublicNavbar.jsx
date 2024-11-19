import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { SiAuthy } from "react-icons/si";
import { RiLoginCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";

export default function PublicNavbar() {
  return (
    <Disclosure
      as="nav"
      className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 shadow-lg"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between items-center">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Mobile menu button */}
                <div className="md:hidden">
                  <Disclosure.Button className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Logo and Brand */}
                <Link
                  to="/"
                  className="flex items-center space-x-2 text-white font-bold text-xl ml-2"
                >
                  <SiAuthy className="h-8 w-8 text-yellow-400" />
                  <span>Expensify</span>
                </Link>
              </div>

              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-6">
                <Link
                  to="/"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/#features"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Features
                </Link>
                <Link
                  to="/#features"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  How It Works
                </Link>
                <Link
                  to="/testimonials"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Testimonials
                </Link>
              </div>

              {/* Right Section - CTA Buttons */}
              <div className="flex items-center space-x-3">
                <Link
                  to="/login"
                  className="inline-flex items-center px-4 py-2 bg-white text-indigo-600 font-semibold rounded-full shadow-md hover:bg-gray-100 transition duration-300"
                >
                  <RiLoginCircleLine className="mr-1 text-lg" />
                  Login
                </Link>
                <Link
                  to="/register"
                  className="inline-flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-full shadow-md hover:bg-yellow-400 transition duration-300"
                >
                  <FaRegUser className="mr-1 text-lg" />
                  Get Started
                </Link>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className="md:hidden bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-600">
            <div className="space-y-1 px-4 pb-3 pt-2 text-white">
              <Link to="/" className="block py-2">
                Home
              </Link>
              <Link to="/features" className="block py-2">
                Features
              </Link>
              <Link to="/how-it-works" className="block py-2">
                How It Works
              </Link>
              <Link to="/testimonials" className="block py-2">
                Testimonials
              </Link>
              <Link to="/login" className="block py-2">
                Login
              </Link>
              <Link
                to="/register"
                className="block py-2 bg-yellow-500 rounded-md text-center text-white font-semibold"
              >
                Get Started
              </Link>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
