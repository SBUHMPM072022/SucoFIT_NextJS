"use client";

import { useState } from "react";
import { CgMathPlus, CgEye, CgPen, CgTrash } from "react-icons/cg";
import Link from "next/link";

const userData = [
  {
    id: "1",
    doctor_name: "budi",
    status: "active",
  },
  {
    id: "2",
    doctor_name: "asep",
    status: "non-active",
  },
];

export default function ListDoctor() {
  const [doctorData] = useState(userData);
  return (
    <div className="flex flex-col p-10 min-h-screen w-[270%]">
      <div className="flex justify-between items-center">
        <h1 className="font-semibold mb-2 uppercase">Doctor List</h1>
        <div></div>
      </div>
      <div className="w-full max-h-[80vh] bg-white p-6 border rounded-xl shadow-sm overflow-x-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Doctor Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctorData.map((value: any, i: number) => (
              <tr key={i} className="text-left">
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{i + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.doctor_name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.status}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="font-semibold mt-10 mb-2 uppercase">Employee List</h1>
        <div></div>
      </div>
      <div className="w-full max-h-[80vh] bg-white p-6 border rounded-xl shadow-sm overflow-x-auto overflow-y-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                No.
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Employee Name
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Details
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {doctorData.map((value: any, i: number) => (
              <tr key={i} className="text-left">
                <td className="px-2 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{i + 1}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {value.doctor_name}
                  </div>
                </td>
                <td className="px-6 py-4 flex whitespace-nowrap">
                  <div key={value.id}>
                    <Link href={`/doctor/${value.id}`} legacyBehavior>
                      <a>
                        <button className="px-2 py-1 bg-[#027FB9] rounded-md text-xs text-white flex items-center hover:bg-[#006695]">
                          <CgEye className="h-4 w-4" /> {/*view detail*/}
                        </button>
                      </a>
                    </Link>
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}
