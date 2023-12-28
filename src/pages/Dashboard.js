import boy from "../images/boy1.png";
import physics from "../images/physics.jpg";
import chemistry from "../images/chemistry.jpg";
import maths from "../images/maths.jpg";
import biology from "../images/biology.png";
import gift from "../images/gift.png";
import social from "../images/social.jpg";
import english from "../images/english.png";
import {MessageCircleMore} from "lucide-react";
import {Link} from "react-router-dom";
import trophy from "../images/trophy.jpg";

const Dashboard = (props) => {
  const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
  const scores = JSON.parse(localStorage.getItem("scores")).filter(obj=>obj.studentId === currentUser.id)
  const totalScores = JSON.parse(localStorage.getItem("scores"))
  const totalScore = scores.reduce((sum, entry) => sum + entry.score, 0);
  const users = JSON.parse(localStorage.getItem("studentData"));
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
  const leaderlist  = createLeaderboard(totalScores);
  console.log(leaderlist)
  function findIndexByName(leaderlist, name) {
    if (leaderlist.find(entry => entry.name === name)){
      return leaderlist.find(entry => entry.name === name).rank;
    }
    else{
      return "N/A"
    }
  }
  
  // Example usage
  const index = findIndexByName(leaderlist, currentUser.id);
  return (
    <div className={"h-screen flex flex-col"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-between">
        <div className="h-inherit w-[50%] flex-col flex text-left justify-around">
          <h1 className="font-poppins font-bold text-[25px]">Dashboard</h1>
          <h1 className="font-poppins font-bold text-[45px]">
            Welcome, {currentUser.name}
          </h1>
        </div>
        <div className="h-inherit flex-row flex justify-evenly items-center">
          <Link to={{pathname:"/mentor"}}><MessageCircleMore className="h-[50px] w-[50px] mr-10" /></Link>
          <Link to={{pathname:"/settings"}}><img src={boy} className="h-[100px] w-[100px]" alt={"avatar"} /></Link>
        </div>
      </div>
      <div className="mt-8 h-[100px] w-6/7 rounded-3xl relative flex-row flex justify-around">
        <div className="h-[100px] bg-[#d9d9d9] w-[56%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-around items-center">
            <img src={gift} className="h-[70px]" />
            <h1 className="font-semibold text-3xl">
              Your Daily Quest is here !
            </h1>
            <div className="h-[50px] bg-[#b47ede] w-[90px] rounded-2xl justify-center items-center flex">
              <h1 className="text-center text-white font-semibold">Try now</h1>
            </div>
          </div>
        </div>
        <Link
        to={{pathname:"/report"}}
          className={
            "w-fit pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"
          }
        >
          <span className={"font-semibold"}>Consistency</span>
          <span className={"text-4xl font-bold"}>1</span>
        </Link>

        <Link
        to={{pathname:"/report"}}
          className={
            "w-[10%] pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"
          }
        >
          <span className={"font-semibold"}>Your Best</span>
          <span className={"text-4xl font-bold"}>{totalScore}</span>
        </Link>
        <Link
          to={{pathname:"/leaderboard"}}
          className={
            "w-[10%] pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white bg-cover bg-center brightness-75"
          }
          style={{ backgroundImage: `url(${trophy})` }}
        >
          <span className={"font-semibold"}>Rank</span>
          <span className={"text-4xl font-bold"}>{index}</span>
        </Link>
      </div>
      <div className={"mt-20 w-full justify-center flex"}>
        <div className="gap-5 grid md:grid-cols-3 grid-cols-2  justify-items-between">
          <Link
            to={{ pathname: "/subject/physics" }}
            className="h-[180px] w-[250px] rounded-3xl relative flex-row flex mr-10 cursor-pointer"
          >
            <img
              src={physics}
              className="rounded-3xl brightness-50 object-cover w-[100%]"
            />
            <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Physics
            </p>
          </Link>

          <Link
            to="/subject/chemistry"
            className="h-[180px] w-[250px] rounded-3xl relative flex-row flex cursor-pointer"
          >
            <img
              src={chemistry}
              className="rounded-3xl brightness-50 object-cover w-[100%]"
            />
            <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Chemistry
            </p>
          </Link>
          <Link
            to="/subject/social"
            className="h-[180px] w-[250px] rounded-3xl relative flex-row flex cursor-pointer"
          >
            <img
              src={social}
              className="rounded-3xl brightness-50 object-cover w-[100%]"
            />
            <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Social
            </p>
          </Link>

          <Link
            to="/subject/maths"
            className="h-[180px] w-[250px] rounded-3xl relative flex-row flex  cursor-pointer"
          >
            <img
              src={maths}
              className="rounded-3xl brightness-50 object-cover w-[100%]"
            />
            <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Maths
            </p>
          </Link>
          <Link
            to="/subject/biology"
            className="h-[180px] w-[250px] rounded-3xl relative flex-row flex  cursor-pointer"
          >
            <img
              src={biology}
              className="rounded-3xl brightness-50 object-cover w-[100%]"
            />
            <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              Biology
            </p>
          </Link>
          <Link
            to="/subject/english"
            className="h-[180px] w-[250px] rounded-3xl relative flex-row flex  cursor-pointer"
          >
            <img
              src={english}
              className="rounded-3xl brightness-50 object-cover w-[100%]"
            />
            <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
              English
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
