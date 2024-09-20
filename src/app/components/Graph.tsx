import React, { useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

const data = [
    { name: "Jan", uv: 4000 },
    { name: "Feb", uv: 3000 },
    { name: "Mar", uv: 2000 },
    { name: "Apr", uv: 2780 },
    { name: "May", uv: 1890 },
    { name: "Jun", uv: 2390 },
    { name: "Jul", uv: 3490 },
    { name: "Aug", uv: 4000 },
    { name: "Sep", uv: 3000 },
    { name: "Oct", uv: 2000 },
    { name: "Nov", uv: 2780 },
    { name: "Dec", uv: 1890 },
];

export default function Graph() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (

        <div className="bg-white rounded-lg shadow-lg mb-4">
            <h2 className="text-lg font-bold p-6">Monthly Exercise Target Completed</h2>
            <BarChart
                width={810}
                height={250}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 20,
                }}
                barSize={30}
            >
                <XAxis dataKey="name"
                    interval={0}
                    angle={0}
                    textAnchor="middle"
                />
                <YAxis
                    tick={false}
                    label={{
                        value: 'Employees',
                        angle: -90,
                        style: { textAnchor: 'middle' }
                    }}
                />
                <Tooltip />
                <Bar
                    dataKey="uv"
                    fill="#027FB9"
                    radius={[20, 20, 20, 20]}
                />
            </BarChart>
        </div>
    );
}
