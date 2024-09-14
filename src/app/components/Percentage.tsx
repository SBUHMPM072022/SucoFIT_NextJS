import { useState, useEffect } from 'react';
import React from "react";
import { PieChart, Pie, Label } from "recharts";

const data01 = [
    { name: "A1", value: 100 },
    { name: "A2", value: 100 },
];

const data02 = [
    { name: "A3", value: 100 },
    { name: "A4", value: 100 },
];

const Percentage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="space-y-2">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold ">Percentage of Employees</h2>
                    <div className="top-2 right-2 bg-[#82ca9d] text-white text-sm px-3 py-1 rounded-full">
                        0,1 %
                    </div>
                </div>
                <div>
                    <p>Cholesterol</p>
                </div>
                {isClient && (
                    <PieChart width={300} height={188}>
                        <Pie
                            data={data01}
                            dataKey="value"
                            cx={150}
                            cy={90}
                            innerRadius={55}
                            outerRadius={70}
                            fill="#82ca9d"
                        >
                            <Label
                                value="50%"
                                position="center"
                                fill="#000"
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                            />
                        </Pie>
                    </PieChart>
                )}
                <div className="flex space-x-2">
                    <p className='font-bold'>340/550</p>
                    <p>Employees with High Cholesterol</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold ">Employee Activity Percentage</h2>
                </div>
                <div>
                    <p>HMPM</p>
                </div>
                {isClient && (
                    <PieChart width={300} height={188}>
                        <Pie
                            data={data02}
                            dataKey="value"
                            cx={150}
                            cy={90}
                            innerRadius={55}
                            outerRadius={70}
                            fill="#82ca9d"
                        >
                            <Label
                                value="50%"
                                position="center"
                                fill="#000"
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                            />
                        </Pie>
                    </PieChart>
                )}
                <div className="flex space-x-2">
                    <p className='font-bold'>48/60</p>
                    <p>HMPM Employees</p>
                </div>
            </div>
        </div>
    );
};

export default Percentage;
