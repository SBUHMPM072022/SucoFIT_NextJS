import { useState, useEffect } from 'react';
import React from "react";
import { PieChart, Pie, Label, Cell } from "recharts";
import { FaSortDown } from "react-icons/fa";
import axios from 'axios';

const data01 = [
    { name: "A1", value: 10 },
    { name: "A2", value: 90 },
];

const data02 = [
    { name: "A3", value: 100 },
    { name: "A4", value: 100 },
];

const COLORS = ['#FF4E4E', '#58C056', '#FFBB28'];

const Percentage = () => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const [activity, setActivity]: any = useState([]);

  async function getActivity() {
    try {
      const response = await axios.get('http://localhost:4006/api/v1/web/dashboard/active-percentage?division=HMPM');
      setActivity(response.data.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }  

  useEffect(() => {
    getActivity()
  }, []);

    return (
        <div className="space-y-2">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold ">Percentage of Employees</h2>
                    <div className="top-2 right-2 bg-[#58C056] text-white text-sm px-3 py-1 rounded-full">
                        0,1 %
                    </div>
                </div>
                <button className='flex space-x-1'>
                    <p>Cholesterol</p>
                    <FaSortDown />
                </button>
                {isClient && (
                    <PieChart width={300} height={188}>
                        <Pie
                            data={data01}
                            dataKey="value"
                            cx={150}
                            cy={90}
                            innerRadius={55}
                            outerRadius={70}
                            fill="#58C056"
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
                            {data01.map((entry, index) => (
                                <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                )}
                <div className="flex space-x-1">
                    <p className='font-bold'>340/550</p>
                    <p>Employees with High Cholesterol</p>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg w-full">
                <div className="flex items-center space-x-2">
                    <h2 className="text-lg font-bold ">Employee Activity Percentage</h2>
                </div>
                <button className='flex space-x-1'>
                    <p>HMPM</p>
                    <FaSortDown />
                </button>
                
                {isClient && activity.data_chart > 0 && (
                    <PieChart width={300} height={188}>
                        <Pie
                            data={activity.data_chart}
                            dataKey="value"
                            cx={150}
                            cy={90}
                            innerRadius={55}
                            outerRadius={70}
                            fill="#58C056"
                        >
                            <Label
                                value={activity.percentage}
                                position="center"
                                fill="#000"
                                style={{
                                    fontSize: "24px",
                                    fontWeight: "bold",
                                }}
                            />
                            {activity.data_chart.map((entry:any, index:number) => (
                                <Cell key={`cell - ${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                )}
                <div className="flex space-x-2">
                    <p className='font-bold'>{activity.active_user} / {activity.active_user + activity.non_active_user}</p>
                    <p>HMPM Employees</p>
                </div>
            </div>
        </div>
    );
};

export default Percentage;
