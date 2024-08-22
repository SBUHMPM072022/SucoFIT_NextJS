import Image from 'next/image';
import { MdKeyboardArrowDown } from "react-icons/md";

const TopBar = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <h1 className="text-xl font-bold">Management Dashboard</h1>
        <p className="text-gray-600">{currentDate}</p>
      </div>
      <div className="flex items-center space-x-2 bg-white rounded-lg h-12">
        <img
          src="Ellipse.png"
          alt="Admin"
          width={40}
          height={40}
          className="rounded-full"
        />
        <button className='flex items-center space-x-2'>
        <span className="font-semibold">Admin</span>
        <span className="material-icons-outlined"><MdKeyboardArrowDown /></span>
        </button>
      </div>
    </div>
  );
};

export default TopBar;
