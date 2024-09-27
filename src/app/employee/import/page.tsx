"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function ImportEmployeesData() {
  const router = useRouter();
  const [employeeData, setEmployeeData] = useState({
    employee: "",
    age: "",
    jk: "",
    tinggi: "",
    berat: "",
    frekuensi: "",
    step: "",
    kolesterol: "",
    guladarah: "",
    tekanandarah: "",
    rekomendasi: ""
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSubmitEmployeeData = (e: any) => {
    e.preventDefault(); 
    router.push('/employee');
  };

  return (
    <div className="flex flex-col p-4 min-h-screen items-center w-[400%]">
      <h1 className="font-bold mt-10 uppercase">Import Employee Medical Data</h1>
      <form onSubmit={handleSubmitEmployeeData} className="w-full max-w-md p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="employee" className="block text-sm font-medium text-gray-700">Employee Name</label>
          <input
            type="text"
            id="employee"
            name="employee"
            value={employeeData.employee}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            type="text"
            id="age"
            name="age"
            value={employeeData.age}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="jk" className="block text-sm font-medium text-gray-700">Gender</label>
          <input
            type="text"
            id="jk"
            name="jk"
            value={employeeData.jk}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tinggi" className="block text-sm font-medium text-gray-700">Body Height</label>
          <input
            type="text"
            id="tinggi"
            name="tinggi"
            value={employeeData.tinggi}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="berat" className="block text-sm font-medium text-gray-700">Body Weight</label>
          <input
            type="text"
            id="berat"
            name="berat"
            value={employeeData.berat}
            onChange={handleChange}
            className="mt-1 block w-full mb-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="frekuensi" className="block text-sm font-medium text-gray-700">Sport Frequency</label>
          <input
            type="text"
            id="frekuensi"
            name="frekuensi"
            value={employeeData.frekuensi}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="step" className="block text-sm font-medium text-gray-700">Daily Steps</label>
          <input
            type="text"
            id="step"
            name="step"
            value={employeeData.step}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="kolesterol" className="block text-sm font-medium text-gray-700">Cholesterol</label>
          <input
            type="text"
            id="kolesterol"
            name="kolesterol"
            value={employeeData.kolesterol}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="guladarah" className="block text-sm font-medium text-gray-700">Blood Sugar</label>
          <input
            type="text"
            id="guladarah"
            name="guladarah"
            value={employeeData.guladarah}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="tekanandarah" className="block text-sm font-medium text-gray-700">Blood Pressure</label>
          <input
            type="text"
            id="tekanandarah"
            name="tekanandarah"
            value={employeeData.tekanandarah}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="rekomendasi" className="block text-sm font-medium text-gray-700">Sport Recommendation</label>
          <input
            type="text"
            id="rekomendasi"
            name="rekomendasi"
            value={employeeData.rekomendasi}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-3 py-2 bg-[#FF7F3E] text-white font-semibold rounded-md shadow-md hover:bg-[#FF5600]">
          Import Employee Data
        </button>
      </form>
    </div>
  );
}
