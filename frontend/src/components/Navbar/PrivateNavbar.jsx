import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { IoLogOutOutline } from "react-icons/io5";
import { SiAuthy } from "react-icons/si";
import { logoutAction } from "../../redux/slice/authSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function PrivateNavbar() {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logoutAction());
    localStorage.removeItem("userInfo");
  };

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
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                  <Disclosure.Button className="text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white">
                    {open ? (
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                {/* Logo */}
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
                  to="/dashboard"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Dashboard
                </Link>
                <Link
                  to="/add-transaction"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Add Transaction
                </Link>
                <Link
                  to="/add-category"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Add Category
                </Link>
                <Link
                  to="/categories"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Categories
                </Link>
                <Link
                  to="/profile"
                  className="text-white hover:text-gray-200 transition duration-300"
                >
                  Profile
                </Link>
              </div>

              {/* Right Section - Logout Button */}
              <div className="flex items-center space-x-3">
                <button
                  onClick={logoutHandler}
                  className="inline-flex items-center px-4 py-2 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-500 transition duration-300"
                >
                  <IoLogOutOutline className="mr-1 text-lg" />
                  Logout
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Panel */}
          <Disclosure.Panel className="md:hidden bg-gradient-to-r from-purple-700 via-blue-600 to-indigo-600">
            <div className="space-y-1 px-4 pb-3 pt-2 text-white">
              <Link to="/dashboard" className="block py-2">
                Dashboard
              </Link>
              <Link to="/add-transaction" className="block py-2">
                Add Transaction
              </Link>
              <Link to="/add-category" className="block py-2">
                Add Category
              </Link>
              <Link to="/categories" className="block py-2">
                Categories
              </Link>
              <Link to="/profile" className="block py-2">
                Profile
              </Link>
              <button
                onClick={logoutHandler}
                className="block w-full py-2 bg-red-600 text-center rounded-md text-white font-semibold hover:bg-red-500"
              >
                Logout
              </button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
