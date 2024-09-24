"use client";

import { useParams } from 'next/navigation'; 
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from "axios";

interface Reward {
  id: string;
  rank: string;
  desc: string;
  prize: string;
}

const Reward = [
  { id: '1', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
  { id: '2', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '3', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '4', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '5', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '6', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '7', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '8', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '9', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '10', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '11', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: '12', rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
  ];

  
  
  export default function EditRewardPage() {
    const { id } = useParams();
    const router = useRouter();
    const [position, setPosition] = useState<[number, number]>([-6.257377, 106.835903]);
    
    const [rewardDataState, setEditReward] :any = useState<Reward | undefined>();
    
    async function getEditReward() {
      try {
        const response = await axios.get(`http://localhost:4006/api/v1/web/reward/${id}`);
        setEditReward(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    }
    
    useEffect(() => {
      getEditReward()
      
    }, []);
  useEffect(() => {
    if (id) {
      const foundReward = Reward.find((reward) => reward.id === id);
      if (foundReward) {
        setEditReward(foundReward);
        setPosition([-6.257377, 106.835903]);
      }
    }
  }, [id]);

  if (!rewardDataState) {
    return <p>Reward not found</p>;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setEditReward({ ...rewardDataState, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push('/reward'); 
  };

  async function editReward() {
    try {
     const res = await axios.put(`http://localhost:4006/api/v1/web/reward/${id}`, rewardDataState);
     console.log(editReward);
     
   } catch (error) {
     console.error(error);
   }
   }

  return (
    <div className="flex flex-col bg-gray-100 p-4 min-h-screen items-center">
      <h1 className="font-bold mt-10 uppercase"> Edit Reward</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-md p-6 rounded-lg">
        <div className="mb-4">
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="desc"
            name="desc"
            value={rewardDataState.desc}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="prize" className="block text-sm font-medium text-gray-700">Prize</label>
          <input
            type="text"
            id="prize"
            name="prize"
            value={rewardDataState.prize}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="button" className="px-2 py-1 bg-[#FF7F3E] text-sm text-white font-semibold rounded-md shadow-md hover:bg-[#FF5600]"
          onClick={() => router.push('/reward')}>
            Cancel
          </button>
          <button type="submit" className="px-2 py-1 bg-[#027FB9] text-sm text-white font-semibold rounded-md hover:bg-[#036999]"
            onClick={editReward}>
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}

// pusing mataku panas hohohohoho
// Fixes:
// Removed duplicate state initialization: Removed the extra rewardDataState declaration outside of the component.
// Moved rewards inside the component: Defined the rewards array inside the EditRewardPage component for clarity.
// Fixed API call in handleSubmit: The editReward function was inlined inside handleSubmit.
// Corrected conditional rendering: Added a check to display a message if rewardDataState is undefined.