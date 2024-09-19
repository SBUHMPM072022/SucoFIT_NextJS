"use client";

import { CgSoftwareUpload } from "react-icons/cg";

const userData = [
    {
      id: "1",
      employee: "debor",
      umur: "21",
      jk: "perempuan",
      tinggi: "164",
      berat: "46",
      frekuensi: "sering",
      step: "10.000",
      kolesterol: "45",
      guladarah: "14",
      tekanandarah: "190",
      rekomendasi: "senam"
    },

    {
      id: "2",
      employee: "fabiantidakbutut",
      umur: "21",
      jk: "laki-laki",
      tinggi: "164",
      berat: "46",
      frekuensi: "sering",
      step: "10.000",
      kolesterol: "45",
      guladarah: "14",
      tekanandarah: "190",
      rekomendasi: "senam"
    },

    {
      id: "3",
      employee: "raisa",
      umur: "21",
      jk: "perempuan",
      tinggi: "164",
      berat: "46",
      frekuensi: "sering",
      step: "10.000",
      kolesterol: "45",
      guladarah: "14",
      tekanandarah: "190",
      rekomendasi: "senam"
    },

  ];

  export default function ListEmployee() {
    return (
      <div className="flex flex-col p-10 min-h-screen">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold mb-2 uppercase">Employees</h1>
          <div className="flex justify-end">
          <button 
            className="px-2 py-1 text-sm bg-[#027FB9] text-white font-semibold rounded-md flex items-center hover:bg-[#036999]">
            <CgSoftwareUpload className="mr-1 h-5 w-5"/>
            Export Employees Data
          </button>
        </div>
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
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Age
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Gender
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Body Height
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Body Weight
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport Frequency
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Daily Steps
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cholesterol
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Sugar
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Blood Pressure
                </th>
                <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sport Recommendation
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {userData.map((value: any, i: number) => (
                <tr key={i} className="text-center">
                  <td className="px-2 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{i + 1}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-left">
                    <div className="text-sm font-medium text-gray-900">
                      {value.employee}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.umur}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.jk}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.tinggi}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.berat}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.frekuensi}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.step}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.kolesterol}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.guladarah}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.tekanandarah}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {value.rekomendasi}
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
  