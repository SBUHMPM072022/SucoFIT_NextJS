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
      <div className="flex items-center space-x-2 bg-white rounded-lg h-12 w-28">
        <div className="flex items-center space-x-1">
        <img
          src="Ellipse.png"
          alt="Admin"
          width={32}
          height={32}
          className="rounded-full m-2"
        />
        <span className="font-semibold">Admin</span>
        {/* <span className="material-icons-outlined"><MdKeyboardArrowDown /></span> */}
        </div>
      </div>
    </div>
  );
};

export default TopBar; 
