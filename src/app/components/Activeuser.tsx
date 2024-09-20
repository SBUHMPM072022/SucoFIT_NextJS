import { FiUsers } from "react-icons/fi";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import axios from "axios";

const ActiveUserCard = () => {

  const [activeUser, setActiveUser]: any = useState([]);

  async function getActiveUser() {
    try {
      const response = await axios.get('http://localhost:4006/api/v1/web/activeuser');
      setActiveUser(response.data.data)
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {

    getActiveUser()

  }, []);

  return (
    <div className="relative bg-[#027FB9] text-white p-10 rounded-lg w-80">
      <div className="flex items-center space-x-2">
        <div className="flex-grow p-2">
          <h2 className="text-lg font-bold">Total Active User</h2>
          <p className="text-4xl font-semibold py-2">
            {activeUser.total_active_user} <span className="text-xl">/ {activeUser.total_user}</span>
          </p>
          <p >Employees vs Last Month</p>
        </div>
      </div>
      <div className="absolute top-3 left-2 bg-white p-2 rounded-md text-black ">
        <FiUsers />
      </div>
      <div className="absolute top-2 right-2 bg-[#FF7F3E] text-white text-sm px-3 py-1 rounded-full">
        {activeUser.percentage} %
      </div>

    </div>
  );
};

export default ActiveUserCard;
