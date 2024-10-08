'use client'
import { useState } from "react";
import { FaGooglePlusG, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const FormToggle = () => {
  const [isActive, setIsActive] = useState(false);
  const [email, setEmail] = useState(''); // State for email input

  const handleRegisterClick = () => {
    setIsActive(true);
  };

  const handleLoginClick = () => {
    setIsActive(false);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(event.target.value); // Log email value
  };

  return (
    <div
      className={`relative flex items-center justify-center w-full max-w-lg min-h-[480px] bg-white rounded-[30px] shadow-[0_5px_15px_rgba(0,0,0,0.35)] overflow-hidden transition-all duration-700 ${
        isActive ? "active" : ""
      }`}
    >
      {/* Sign Up Form */}
      <div
        className={`absolute top-0 left-0 h-full w-1/2 transition-all duration-700 ease-in-out ${
          isActive ? "transform translate-x-full opacity-100 z-10" : "left-0 z-0"
        }`}
      >
        <form className="flex flex-col items-center justify-center h-full p-10 bg-white">
          <h1 className="text-2xl font-bold mb-4">Create Account</h1>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="icon">
              <FaGooglePlusG className="w-8 h-8 text-gray-600" />
            </a>
            <a href="#" className="icon">
              <FaFacebookF className="w-8 h-8 text-gray-600" />
            </a>
            <a href="#" className="icon">
              <FaGithub className="w-8 h-8 text-gray-600" />
            </a>
            <a href="#" className="icon">
              <FaLinkedinIn className="w-8 h-8 text-gray-600" />
            </a>
          </div>
          <span className="text-xs mb-4">or use your email for registration</span>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-4 py-2 mb-2 text-sm bg-gray-200 rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-2 text-sm bg-gray-200 rounded focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-2 text-sm bg-gray-200 rounded focus:outline-none"
          />
          <button
            type="button"
            className="mt-4 px-6 py-2 text-xs font-bold text-white bg-purple-700 rounded uppercase"
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Sign In Form */}
      <div
        className={`absolute top-0 h-full w-1/2 transition-all duration-700 ease-in-out ${
          isActive ? "transform translate-x-full opacity-0" : "left-0 z-10"
        }`}
      >
        <form className="flex flex-col items-center justify-center h-full p-10 bg-white">
          <h1 className="text-2xl font-bold mb-4">Sign In</h1>
          <div className="flex space-x-3 mb-4">
            <a href="#" className="icon">
              <FaGooglePlusG className="w-8 h-8 text-gray-600" />
            </a>
            <a href="#" className="icon">
              <FaFacebookF className="w-8 h-8 text-gray-600" />
            </a>
            <a href="#" className="icon">
              <FaGithub className="w-8 h-8 text-gray-600" />
            </a>
            <a href="#" className="icon">
              <FaLinkedinIn className="w-8 h-8 text-gray-600" />
            </a>
          </div>
          <span className="text-xs mb-4">or use your email password</span>
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 mb-2 text-sm bg-gray-200 rounded focus:outline-none"
            value={email} // Controlled input for email
            onChange={handleEmailChange} // Call handler on change
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 mb-2 text-sm bg-gray-200 rounded focus:outline-none"
          />
          <a href="#" className="text-xs mt-2 mb-4 text-gray-600">Forget Your Password?</a>
          <button
            type="button"
            className="mt-4 px-6 py-2 text-xs font-bold text-white bg-purple-700 rounded uppercase"
            onClick={handleEmailChange}
          >
            Sign In
          </button>
        </form>
      </div>

      {/* Toggle Panels */}
      <div
        className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-all duration-700 ease-in-out bg-gradient-to-r from-indigo-600 to-purple-800 text-white  z-20 ${
          isActive ? "transform translate-x-[-100%]" : ""
        }`}
      >
        <div className="relative flex h-full items-center justify-center text-center">
          {/* Left Toggle Panel */}
          <div
            className={`absolute w-1/2 h-full flex items-center justify-center p-8 transition-transform duration-700 ${
              isActive ? "transform translate-x-0" : "transform translate-x-[-200%]"
            }`}
          >
            <div>
              <h1 className="text-2xl font-bold mb-4">Welcome Back!</h1>
              <p className="mb-4">Enter your personal details to use all of the site's features</p>
              <button
                className="px-8 py-2 text-xs font-bold text-white bg-transparent border border-white rounded uppercase"
                onClick={handleLoginClick}
              >
                Sign In
              </button>
            </div>
          </div>

          {/* Right Toggle Panel */}
          <div
            className={`absolute w-1/2 h-full flex items-center justify-center p-8 transition-transform duration-500 ${
              isActive ? "transform translate-x-[200%]" : "transform translate-x-0"
            }`}
          >
            <div>
              <h1 className="text-2xl font-bold mb-4">Hello, Friend!</h1>
              <p className="mb-4">Register with your personal details to use all of the site's features</p>
              <button
                className="px-8 py-2 text-xs font-bold text-white bg-transparent border border-white rounded uppercase"
                onClick={handleRegisterClick}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormToggle;
