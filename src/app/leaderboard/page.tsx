const userData = [
    {
      Name: "Fikri Ahsanandi",
      username: "@fikriahh",
      point: "3030 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
    {
      Name: "Ivan Fabriano",
      username: "@ivanfabs",
      point: "3000 pts",
      profile: "/cat judge.jpg",
    },
  ];
  
  export default function Leaderboard() {
    return (
      <div className="flex flex-col bg-gray-100 p-4 min-h-screen">
        <div className="w-full max-w-md bg-white p-6 border rounded-lg shadow-md">
        <h1 className="font-semibold mb-2">Leaderboard</h1>
        <p className="text-sm mb-4">Last Updated 25th July 2024</p>
  
        <div className="w-full max-w-md max-h-60 bg-white p-6 border-b rounded-lg overflow-auto">
          {userData.map((value, index) => (
            <div key={index} className="flex items-center mb-4 last:mb-0">
              <div className="flex items-center text-lg font-bold text-slate-400">
                {index + 1}
              </div>
              <img
                src={value.profile}
                alt="profile"
                className="w-16 h-16 rounded-full ml-4"
              />
              <div className="ml-4 flex-grow">
                <h2 className="font-semibold">{value.Name}</h2>
                <p className="text-sm text-slate-400">{value.username}</p>
              </div>
              <p className="text-lg text-slate-400 font-semibold">{value.point}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
  }
  