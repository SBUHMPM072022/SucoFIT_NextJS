"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

import axios from "axios";
import { BiPhone } from 'react-icons/bi';

export default function Register() {

  const router = useRouter();
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [division, setDivision]: any = useState([]);

  const togglePasswordVisibility1 = () => {
    setShowPassword1(!showPassword1);
  };
  const togglePasswordVisibility2 = () => {
    setShowPassword2(!showPassword2);
  };

  const [registerData, setRegisterData] = useState({
    fullname: '',
    division_id: '',
    email: '',
    phone_number: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(registerData) 
    axios.post('http://localhost:4006/api/v1/web/register', registerData
    )
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  async function getDivision() {
    try {
      const response = await axios.get('http://localhost:4006/api/v1/web/division');
      setDivision(response.data.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getDivision()
  }, []);

  return (
    <>

      <div className="flex min-h-full flex-1 flex-col justify-center p-6 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h1 className="mt-6 text-center font-bold text-gray-900 uppercase">
            Registration
          </h1>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  type="text"
                  value={registerData.fullname}
                  onChange={handleChange}
                  required
                  autoComplete="fullname"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="division_id" className="block text-sm font-medium leading-6 text-gray-900">
                Division
              </label>
              <div className="mt-2">
                <select
                  id="division_id"
                  name="division_id"
                  value={registerData.division_id}
                  onChange={handleChange}
                  required
                  autoComplete="division_id"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                >
                  <option value="">Select Division</option>
                  {division.map((value: any, i: number) => (
                    <option key={i} value={value.value}>{value.label}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={registerData.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone_number" className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  id="phone_number"
                  name="phone_number"
                  type="tel"
                  value={registerData.phone_number}
                  onChange={handleChange}
                  required
                  autoComplete="phone_number"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password1" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password1"
                  name="password"
                  type={showPassword1 ? "text" : "password"}
                  value={registerData.password}
                  onChange={handleChange}
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility1}
                  className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500"
                >
                  {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password2" className="block text-sm font-medium leading-6 text-gray-900">
                  Confirm Password
                </label>
              </div>
              <div className="mt-2 relative">
                <input
                  id="password2"
                  name="password"
                  type={showPassword2 ? "text" : "password"}
                  required
                  autoComplete="password"
                  className="block w-full rounded-md border-0 px-1.5 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                />
                <button
                  type="button"
                  onClick={togglePasswordVisibility2}
                  className="absolute inset-y-0 right-0 px-2 flex items-center text-gray-500"
                >
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="flex-1 justify-center rounded-md bg-[#FF7F3E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#FF5600] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF7F3E]"
                onClick={(e: any)=>handleSubmit(e)}
              >
                Sign Up
              </button>
            </div>
          </form>

        </div>
      </div>
    </>
  )
}
