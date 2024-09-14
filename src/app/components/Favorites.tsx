import { useState, useEffect } from 'react';

const favoritesData = [
    { no: '01', image: '', sport: 'Jogging', percentage: '37' },
    { no: '02', image: '', sport: 'Badminton', percentage: '20' },
    { no: '03', image: '', sport: 'Zumba', percentage: '12' },
    { no: '04', image: '', sport: 'Tennis', percentage: '6' },
    { no: '05', image: '', sport: 'Futsal', percentage: '4' },
    { no: '--', image: '', sport: 'Others', percentage: '6' },

];

const Favorites = () => {

    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full ">
            <h2 className="text-lg font-bold mb-2">Top 5 Most Favorites Sport</h2>
            <p className="text-gray-600 mb-4">In Last Month</p>
            <div className="space-y-4 h-80 overflow-y-auto pr-2">
                {favoritesData.map((user: any, index:number) => (
                    <div key={index} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center">
                            <span className="text-lg font-bold text-gray-500 w-8">{user.no}</span>
                            <img
                                src={user.image}
                                // alt={user.fullname}
                                width={30}
                                height={30}
                                className="rounded-full ml-3"
                            />
                            <div className="ml-4">
                                <p className="font-semibold">{user.sport}</p>
                                <p className="text-sm text-gray-500"></p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold">{user.percentage} %</p>
                            {/* <p className="text-sm text-gray-500">%</p> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favorites;
