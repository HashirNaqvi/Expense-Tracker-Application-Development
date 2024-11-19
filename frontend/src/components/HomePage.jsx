// import React from "react";
// import {
//   FaMoneyBillWave,
//   FaRegCalendarAlt,
//   FaSignInAlt,
//   FaList,
//   FaChartPie,
//   FaQuoteLeft,
// } from "react-icons/fa";
// import { IoIosStats } from "react-icons/io";
// import { FaFilter } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// const HeroSection = () => {
//   return (
//     <>
//       <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-4">
//         <div className="max-w-7xl mx-auto flex flex-col items-center">
//           {/* Heading */}
//           <h1 className="text-5xl font-bold text-center">
//             Track Your Expenses Effortlessly
//           </h1>

//           {/* Subheading */}
//           <p className="mt-4 text-xl text-center">
//             Manage your finances with a modern solution designed for you.
//           </p>

//           {/* Feature Icons */}
//           <div className="flex space-x-8 mt-10">
//             <div className="flex flex-col items-center">
//               <FaMoneyBillWave className="text-3xl" />
//               <p className="mt-2">Efficient Tracking</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <FaFilter className="text-3xl" />
//               <p className="mt-2">Transactions Filtering</p>
//             </div>
//             <div className="flex flex-col items-center">
//               <IoIosStats className="text-3xl" />
//               <p className="mt-2">Insightful Reports</p>
//             </div>
//           </div>

//           {/* Call to Action Button */}
//           <Link to="/register">
//             <button className="mt-8 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
//               Get Started
//             </button>
//           </Link>
//         </div>
//       </div>
//       {/* How it works */}
//       <div className="py-20 px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800">
//           How It Works
//         </h2>
//         <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
//           {/* Step 1 */}
//           <div className="flex flex-col items-center text-center">
//             <div className="p-4 rounded-full bg-blue-500 text-white mb-4">
//               <FaSignInAlt className="text-xl" />
//             </div>
//             <h3 className="mb-2 font-semibold">Sign Up</h3>
//             <p>Register and start managing your expenses in a minute.</p>
//           </div>
//           {/* Step 2 */}
//           <div className="flex flex-col items-center text-center">
//             <div className="p-4 rounded-full bg-green-500 text-white mb-4">
//               <FaList className="text-xl" />
//             </div>
//             <h3 className="mb-2 font-semibold">Add Transactions</h3>
//             <p>Quickly add income and expenses to your account.</p>
//           </div>
//           {/* Step 3 */}
//           <div className="flex flex-col items-center text-center">
//             <div className="p-4 rounded-full bg-yellow-500 text-white mb-4">
//               <FaChartPie className="text-xl" />
//             </div>
//             <h3 className="mb-2 font-semibold">View Reports</h3>
//             <p>See insightful reports & graphs of your finances.</p>
//           </div>
//         </div>
//       </div>
//       {/* Testimonials */}
//       <div className="bg-gray-100 py-20 px-4">
//         <h2 className="text-3xl font-bold text-center text-gray-800">
//           What Our Users Say
//         </h2>
//         <div className="mt-10 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <FaQuoteLeft className="text-xl text-gray-400" />
//             <p className="mt-4">
//               "This app has revolutionized the way I track my expenses. Highly
//               intuitive and user-friendly."
//             </p>
//             <p className="mt-4 font-bold">- Jane Doe</p>
//           </div>
//           <div className="bg-white p-6 rounded-lg shadow-lg">
//             <FaQuoteLeft className="text-xl text-gray-400" />
//             <p className="mt-4">
//               "Finally, a hassle-free way to manage my finances. The insights
//               feature is a game changer!"
//             </p>
//             <p className="mt-4 font-bold">- John Smith</p>
//           </div>
//         </div>
//       </div>
//       {/* CTA */}
//       <div className="bg-blue-500 text-white py-20 px-4">
//         <div className="max-w-4xl mx-auto text-center">
//           <h2 className="text-3xl font-bold">
//             Ready to Take Control of Your Finances?
//           </h2>
//           <p className="mt-4">
//             Join us now and start managing your expenses like a pro!
//           </p>
//           <Link to="/register">
//             <button className="mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
//               Sign Up For Free
//             </button>
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HeroSection;

import React from "react";
import {
  FaMoneyBillWave,
  FaSignInAlt,
  FaList,
  FaChartPie,
  FaQuoteLeft,
} from "react-icons/fa";
import { IoIosStats } from "react-icons/io";
import { FaFilter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-500 text-white py-32 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
        <div className="relative max-w-5xl mx-auto text-center z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fade-in">
            Manage Your Finances with Ease
          </h1>
          <p className="text-lg md:text-xl mb-10">
            A comprehensive and easy-to-use expense tracker tailored just for
            you.
          </p>
          <Link to="/register">
            <button className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105">
              Get Started Free
            </button>
          </Link>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20 px-6">
        <h2
          //   id="features"
          className="text-3xl font-bold text-center text-gray-800 features mb-12"
        >
          Key Features
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaMoneyBillWave className="text-5xl text-purple-600 mb-4" />
            <h3 id="features" className="text-xl font-semibold">
              Efficient Tracking
            </h3>
            <p className="mt-2 text-gray-600">
              Track expenses quickly and effortlessly.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaFilter className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold">Advanced Filtering</h3>
            <p className="mt-2 text-gray-600">
              Organize and filter transactions seamlessly.
            </p>
          </div>
          <div className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <IoIosStats className="text-5xl text-purple-600 mb-4" />
            <h3 className="text-xl font-semibold">Detailed Analytics</h3>
            <p className="mt-2 text-gray-600">
              Gain insights into your spending habits.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="p-6 rounded-full bg-indigo-500 text-white mb-4">
              <FaSignInAlt className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg">Sign Up</h3>
            <p className="text-gray-600 mt-2">
              Create an account and start your journey.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="p-6 rounded-full bg-green-500 text-white mb-4">
              <FaList className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg">Add Transactions</h3>
            <p className="text-gray-600 mt-2">
              Quickly log your income and expenses.
            </p>
          </div>
          <div className="flex flex-col items-center p-8 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300">
            <div className="p-6 rounded-full bg-yellow-500 text-white mb-4">
              <FaChartPie className="text-2xl" />
            </div>
            <h3 className="font-semibold text-lg">Analyze</h3>
            <p className="text-gray-600 mt-2">
              Visualize your financial health.
            </p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-100 py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Users Say
        </h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaQuoteLeft className="text-2xl text-purple-400 mb-4" />
            <p className="text-gray-700">
              "This app has transformed the way I manage my money. It's
              intuitive and super easy to use."
            </p>
            <p className="font-semibold mt-4 text-right">- Jane Doe</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
            <FaQuoteLeft className="text-2xl text-purple-400 mb-4" />
            <p className="text-gray-700">
              "A must-have tool for anyone looking to track expenses
              effortlessly. Highly recommended!"
            </p>
            <p className="font-semibold mt-4 text-right">- John Smith</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-24 px-6 text-center">
        <h2 className="text-3xl font-bold">
          Take Control of Your Finances Today
        </h2>
        <p className="text-lg mt-4">
          Sign up now and start tracking your expenses like a pro.
        </p>
        <Link to="/register">
          <button className="mt-8 px-10 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105">
            Join Now - It's Free
          </button>
        </Link>
      </div>
    </>
  );
};

export default HeroSection;
