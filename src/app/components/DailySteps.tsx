import { useState, useEffect } from 'react';
import React from "react";
import { PieChart, Pie, Label } from "recharts";

const data01 = [
    { name: "A1", value: 25 },
    { name: "A2", value: 75 },
];

const DailySteps = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg mb-4">
            <div className="flex items-center space-x-2">
                <h2 className="text-lg font-bold ">Daily Steps Target Reached</h2>
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
                        fill="#FF4E4E"
                    >
                        <Label
                            value="25%"
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
                <p className='font-bold'>138/550</p>
                <p>Employees</p>
            </div>
        </div>

    );
};

export default DailySteps;
