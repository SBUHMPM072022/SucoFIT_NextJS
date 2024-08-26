import { FiUsers } from "react-icons/fi";

const ActiveUserCard = () => {
  return (
    <div className="relative bg-[#027FB9] text-white p-10 rounded-lg w-80">
      <div className="flex items-center space-x-2">
        <div className="flex-grow p-2">
          <h2 className="text-lg">Total Active User</h2>
          <p className="text-4xl font-semibold py-2">
            550 <span className="text-xl">/ 700</span>
          </p>
          <p >Employees vs last month</p>
        </div>
      </div>
      <div className="absolute top-3 left-2 bg-white p-2 rounded-md text-black ">
        <FiUsers />
      </div>
      <div className="absolute top-2 right-2 bg-[#FF7F3E] text-white text-sm px-3 py-1 rounded-full">
        78,5 %
      </div>

    </div>
  );
};

export default ActiveUserCard;
