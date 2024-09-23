"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaPlus } from "react-icons/fa6";
import { CgPen, CgTrash } from "react-icons/cg";
import axios from "axios";
import Link from "next/link";

import Navbar from '../components/Navbar';

// interface Event {
//     id: string;
//     rank: string;
//     desc: string;
//     prize: string;
// }

const rewards = [
    { id: 1, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 2, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
    { id: 3, rank: '', desc: 'Fikri Ahsanandi', prize: 'Rp 100.000' },
];

export default function Reward() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [start_date, setStartDate] = useState('');
    const [end_date, setEndDate] = useState('');
    const [start_rank, setStartRank] = useState('');
    const [end_rank, setEndRank] = useState('');

    const [reward, setRewardData]: any = useState([]);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // const [modalData, setModalData] = useState({
    //     start_date: '',
    //     end_date: '',
    //     start_rank: '',
    //     end_rank: ''
    //   });

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        const position = [];
        for (let i = parseInt(start_rank); i <= parseInt(end_rank); i++) {
            position.push(i);
        }

        const newRewardData = {
            start_date,
            end_date,
            start_rank,
            end_rank
        };

        console.log('Start Date:', start_date);
        console.log('End Date:', end_date);
        console.log('Position:', position);

        axios.post('http://localhost:4006/api/v1/web/reward', newRewardData)
            .then(function (response) {
                getReward();
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        closeModal();
    };

    async function getReward() {
        try {
            const response = await axios.get('http://localhost:4006/api/v1/web/reward');
            setRewardData(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getReward()
    }, []);

    return (
        <div className="flex h-screen w-[250%]">

            <div className="flex-grow p-6">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-semibold mb-2 uppercase">Reward</h2>
                    <button onClick={openModal}
                        className="flex items-center bg-[#027FB9] text-white py-1 px-2 rounded-md hover:bg-[#006695]">
                        <FaPlus className="mr-1" />Create reward
                    </button>
                </div>

                <div className="">
                    <div className="w-full max-h-[80vh] bg-white p-6 border rounded-xl shadow-sm overflow-x-auto overflow-y-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rank</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Prize</th>
                                    <th scope="col" className="px-2 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {reward.map((value: any, i: number) => (
                                    <tr key={i} >
                                        <td className="px-2 py-3 whitespace-nowrap text-sm text-gray-900">{value.position}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-center text-sm text-gray-900">{value.description}</td>
                                        <td className="px-6 py-3 whitespace-nowrap text-center text-sm text-gray-900">{value.prize}</td>
                                        <td className="px-2 py-3 whitespace-nowrap space-x-2 text-center text-sm">
                                            {/* <button className="bg-[#027FB9] text-white px-2 py-1.5 rounded-md hover:bg-[#006695]"><CgPen /></button>
                                            <button className="bg-[#FF7F3E] text-white px-2 py-1.5 rounded-md hover:bg-[#FF5600]"><CgTrash /></button> */}
                                            <Link href={`/reward/edit/${value.id}`} legacyBehavior>
                                                <a>
                                                    <button className="bg-[#027FB9] text-white px-2 py-1.5 rounded-md hover:bg-[#006695]"><CgPen /></button>
                                                </a>
                                            </Link>
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
                            <h2 className="text-xl font-bold mb-4">Create reward</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Start Date</label>
                                    <input
                                        type="date"
                                        value={start_date}
                                        onChange={(e) => setStartDate(e.target.value)}
                                        className="mt-1 block w-full p-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">End Date</label>
                                    <input
                                        type="date"
                                        value={end_date}
                                        onChange={(e) => setEndDate(e.target.value)}
                                        className="mt-1 block w-full p-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">Start Rank</label>
                                    <input
                                        type="number"
                                        value={start_rank}
                                        onChange={(e) => setStartRank(e.target.value)}
                                        className="mt-1 block w-full p-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700">End Rank</label>
                                    <input
                                        type="number"
                                        value={end_rank}
                                        onChange={(e) => setEndRank(e.target.value)}
                                        className="mt-1 block w-full p-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="flex justify-end space-x-2">
                                    <button
                                        type="submit"
                                        onClick={(e: any) => handleSubmit(e)}
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
