"use client";

import { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { CgPen, CgTrash } from "react-icons/cg";

import Navbar from '../components/Navbar';

const rewards = [
    { id: 1, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 2, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 3, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 4, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 5, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 6, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 7, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 8, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 9, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 10, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 11, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 12, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
];

export default function Reward() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = (date: { preventDefault: () => void; }) => {
        date.preventDefault();
       
        console.log('Start Date:', startDate);
        console.log('End Date:', endDate);
        closeModal();
    };

    return (
       
        
        <div className="flex h-screen">
        
        <div className="flex-grow p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Reward</h2>
                <button onClick={openModal}
                className="flex items-center bg-[#027FB9] text-white py-1 px-2 rounded-md hover:bg-[#006695]">
                    <FaPlus className="mr-1" />  Set Period
                </button>
            </div>

            <div className="overflow-x-auto overflow-y-auto max-h-80">
                <div className="min-w-full bg-white border rounded-md p-6">
                    <table className="min-w-full bg-white border">
                        <thead>
                            <tr>
                                <th className="py-2 px-4 border-b text-left text-gray-500">Rank</th>
                                <th className="py-2 px-4 border-b text-gray-500">Description</th>
                                <th className="py-2 px-4 border-b text-gray-500">Prize</th>
                                <th className="py-2 px-4 border-b text-gray-500">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rewards.map((reward, index) => (
                                <tr key={reward.id}>
                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                    <td className="py-2 px-4 border-b text-center">{reward.desc}</td>
                                    <td className="py-2 px-4 border-b text-center">{reward.prize}</td>
                                    <td className="py-2 px-4 border-b space-x-2 text-center">
                                        <button className="bg-[#027FB9] text-white px-2 py-1.5 rounded-md hover:bg-[#006695]"><CgPen /></button>
                                        <button className="bg-[#FF7F3E] text-white px-2 py-1.5 rounded-md hover:bg-[#FF5600]"><CgTrash /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

{/* Modal */}
{isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-md shadow-md w-96">
                        <h2 className="text-xl font-bold mb-4">Set Period</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                <input
                                    type="date"
                                    value={startDate}
                                    onChange={(e) => setStartDate(e.target.value)}
                                    className="mt-1 block w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">End Date</label>
                                <input
                                    type="date"
                                    value={endDate}
                                    onChange={(e) => setEndDate(e.target.value)}
                                    className="mt-1 block w-full p-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="submit"
                                    className="bg-[#027FB9] w-16 text-white py-1 px-3 rounded-md hover:bg-[#006695]"
                                >
                                    Save
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="bg-[#FF7F3E] w-20 text-white py-1 px-3 rounded-md hover:bg-[#FF5600]"
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

        </div>
        </div>
        
    );
}
