"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import axios from "axios";

export default function Login() {

  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = () => {
    router.push('/register');
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData) 
    axios.post('http://localhost:4006/api/v1/web/login', loginData
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm flex justify-center">
          <img
            alt="Logo SucoFIT"
            src="Logo_SucoFIT.png"
            className="w-100 h-100 max-w-xs"
          />
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Exercises unlock your productivity potential
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username / Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email & text"
                  value={loginData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900  ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-[#027FB9] hover:text-[#006695]">
                    Forgot password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2 relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={loginData.password}
                  onChange={handleChange}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <button
                type="submit"
                onClick={(e: any)=>handleSubmit(e)}
                className="flex-1 justify-center rounded-md bg-[#FF7F3E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF5600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7F3E]"
              >
                Sign in
              </button>
              <button
                type="button"
                onClick={handleRegister}
                className="flex-1 justify-center rounded-md bg-[#027FB9] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#006695] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#027FB9]"
              >
                Register
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
