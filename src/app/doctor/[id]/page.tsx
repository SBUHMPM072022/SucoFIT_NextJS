"use client";

import { useState } from "react";

const employeeData = [
    {
        id: "1",
        employee_name: "Budi",
        division: "SBU HMPM",
        status: "Normal",
    }
];

const Badge = ({ label }: { label: string }) => {
    const getBadgeColor = () => {
        switch (label) {
            case 'High':
                return 'bg-red-500 text-white';
            case 'Low':
                return 'bg-yellow-500 text-white';
            default:
                return 'bg-green-500 text-white';
        }
    };

    return (
        <span className={`px-2 py-1 font-semibold rounded-full ${getBadgeColor()}`}>
            {label}
        </span>
    );
};

export default function ListEmployee() {
    // const [employeeData] = useState(userData);

    return (
        <div className="flex flex-col p-10 min-h-screen w-[150%]">
            <div className="flex justify-between items-center">
                <h1 className="font-semibold mb-6 uppercase">Employee Details</h1>
                <div></div>
            </div>

            <div className="flex">
                {/* Photo box on the left side */}
                <div className="flex-shrink-0 mr-6">
                    <div className="w-48 h-48 bg-gray-200 border border-gray-300 rounded-lg shadow-sm flex items-center justify-center">
                        <span className="text-gray-500">Employee Photo</span>
                    </div>
                </div>

                {/* Employee List as Vertical Data Cards */}
                <div className="w-full space-y-4">
                    {employeeData.map((value: any, i: number) => (
                        <div key={i} className="bg-white p-6 h-48 border rounded-xl shadow-sm">
                            <div className="mb-4">
                                <span className="font-semibold">Name: </span>
                                <span>{value.employee_name}</span>
                            </div>
                            <div className="mb-4">
                                <span className="font-semibold">Division: </span>
                                <span>{value.division}</span>
                            </div>
                            <div>
                                <span className="font-semibold">Medical Status: </span>
                                {/* <span>{value.status}</span> */}
                                <span className="flex mt-3"><Badge label={value.status} /></span>
                            </div>

                            {/* Select Menu */}
                            <div className="mt-10">
                                <label className="font-semibold mr-2">Sport Recommendation: </label>
                                <select
                                    className="border border-gray-300 rounded-lg p-2"
                                    // value={value.recommendation}
                                    // onChange={(e) => handleSelectChange(value.id, e.target.value)}
                                >
                                    <option value="Select">Select</option>
                                    <option value="Jogging">Jogging</option>
                                    <option value="Tenis">Tenis</option>
                                    <option value="Zumba">Zumba</option>
                                    <option value="Badminton">Badminton</option>
                                    <option value="Futsal">Futsal</option>
                                    <option value="Fitness">Fitness</option>
                                </select>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </div>
    );
}
