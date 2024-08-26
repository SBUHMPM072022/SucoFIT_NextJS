import Image from 'next/image';

const leaderboardData = [
  { rank: 1, name: 'Ivan Fabriano', username: '@ivanfabs', points: 3230, image: '' },
  { rank: 2, name: 'Fikri Ahsanandi', username: '@fikriahh', points: 3000, image: '' },
  { rank: 3, name: 'Raisa Aliya', username: '@raisa', points: 2820, image: '' },
  { rank: 4, name: 'Jhon Doe', username: '@raisa', points: 2000, image: '' },
  { rank: 5, name: 'Jhon Doe', username: '@raisa', points: 2000, image: '' },
  { rank: 6, name: 'Jhon Doe', username: '@raisa', points: 2000, image: '' },
  { rank: 7, name: 'Fikri Ahsanandi', username: '@fikriahh', points: 2000, image: '' },
  { rank: 8, name: 'Raisa Aliya', username: '@raisa', points: 2000, image: '' },
  { rank: 9, name: 'Jhon Doe', username: '@raisa', points: 2000, image: '' },
  { rank: 10, name: 'Jhon Doe', username: '@raisa', points: 2000, image: '' },
  

];

const Leaderboard = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full ">
      <h2 className="text-xl font-bold mb-2">Leaderboard</h2>
      <p className="text-gray-600 mb-4">Last Update Data 25 July 2024</p>
      <div className="space-y-4 h-80 overflow-y-auto pr-2">
        {leaderboardData.map((user) => (
          <div key={user.rank} className="flex items-center justify-between border-b pb-4">
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-500 w-8">{String(user.rank).padStart(2, '0')}</span>
              <img
                src={user.image}
                alt={user.name}
                width={40}
                height={40}
                className="rounded-full ml-3"
              />
              <div className="ml-4">
                <p className="font-semibold">{user.name}</p>
                <p className="text-sm text-gray-500">{user.username}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xl font-bold text-gray-500">{user.points}</p>
              <p className="text-sm text-gray-500">pts</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
