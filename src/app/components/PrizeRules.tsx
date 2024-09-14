import { FaMedal } from "react-icons/fa";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import axios from "axios";

const PrizeRules = () => {

  return (
    <div className="relative bg-[#FF7F3E] text-white p-10 rounded-lg w-full h-40">
      <div className="flex items-center space-x-2">
        <div className="flex-grow p-2">
          <h2 className="text-lg mt-4">Leaderboard prize is given for top 10 and total prize is 10 Million Rupiah</h2>
        </div>
      </div>
      <div className="flex absolute top-3 left-2 p-2 rounded-md text-white space-x-4 items-center">
        <FaMedal /> 
        <h2 className="text-xl font-bold">Prize Rules</h2>
      </div>
      <button className="absolute top-2 right-2 bg-[#FFFFFF] text-[#FF7F3E] text-sm font-bold px-3 py-1 rounded-full">
        Details
      </button>

    </div>
  );
};

export default PrizeRules;
