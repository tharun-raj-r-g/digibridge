import trophy from "../images/trophy.jpg";

const LeaderBrd = (props) => {
  const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
  const users = JSON.parse(localStorage.getItem("studentData"));
  const scores = JSON.parse(localStorage.getItem("scores"));
  function createLeaderboard(scores) {
    // Create an object to store the total scores for each student
    const totalScores = {};

    // Calculate total scores for each student
    scores.forEach(entry => {
      const studentId = entry.studentId;
      totalScores[studentId] = (totalScores[studentId] || 0) + entry.score;
    });

    // Convert the object into an array of { studentId, totalScore } objects
    const leaderboardData = Object.entries(totalScores).map(([studentId, totalScore]) => ({
      studentId,
      totalScore
    }));

    // Sort the leaderboardData in descending order based on totalScore
    leaderboardData.sort((a, b) => b.totalScore - a.totalScore);

    // Add ranks to the leaderboardData
    leaderboardData.forEach((entry, index) => {
      entry.rank = index + 1;
    });

    // Map the leaderboardData to the required format
    const leaderboard = leaderboardData.map(entry => ({
      name: entry.studentId, // Assuming studentId is the name
      score: entry.totalScore,
      rank: entry.rank
    }));

    return leaderboard;
  }
  const leaderlist  = createLeaderboard(scores);
  const findUser = (user)=>{
    
    return (users.find(obj=>{return obj.id === user}).name);
  }

  return (
    <div className={"h-screen flex flex-col items-center"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-between">
        <div className="h-inherit w-[50%] flex-col flex text-left justify-around">
          <div className="flex flex-row items-center">
            <img src={trophy} className="h-[50px]" />
            <h1 className="font-poppins font-bold text-[45px]">LeaderBoard</h1>
          </div>
        </div>
      </div>
      <div className="h-[8%] bg-[#93e3d8] w-[100%] rounded-1xl ml-[10px] relative flex-row flex shadow-2xl">
        <div className="absolute inset-0 bg-inherit shadow-inner rounded-1xl flex-row flex justify-start items-center pl-5">
          <h1 className="text-2xl w-[6%] text-center">#</h1>
          <h1 className="text-2xl w-[35%] text-center">Name</h1>
          {/*<h1 className="text-2xl w-[30%] text-center">Consistency</h1>*/}
          {/*<h1 className="text-2xl w-[30%] text-center">Completion</h1>*/}
          <h1 className="text-2xl w-[30%] text-center">Score</h1>
        </div>
      </div>
      {leaderlist.map((item, index) => (
        <div className="h-[8%] bg-[white] w-[100%] rounded-1xl ml-[10px] relative flex-row flex border-2 pl-5 items-center drop-shadow-2xl">
          <h1 className="text-2xl w-[6%] text-center">{index+1}</h1>
          <h1 className="text-2xl w-[35%] text-center">{findUser(item.name)}</h1>
          {/*<h1 className="text-2xl w-[30%] text-center">{item.streak}</h1>*/}
          {/*<h1 className="text-2xl w-[30%] text-center">{item.score}</h1>*/}
          <div className="w-[30%] flex flex-col items-center">
          <h1 className={`text-2xl w-[20%] rounded-2xl text-center ${index==0?"bg-[gold] text-white":(index==1?"bg-[silver] text-white":(index==2?"bg-[brown] text-white":""))}`}>{item.score}</h1>
          </div>
      </div>
      ))}
    </div>
  );
};

export default LeaderBrd;
