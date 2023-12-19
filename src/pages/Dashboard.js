import boy from "../images/boy1.png";
import physics from "../images/physics.jpg";
import chemistry from "../images/chemistry.jpg";
import maths from "../images/maths.jpg";
import biology from "../images/biology.png";
import gift from "../images/gift.png";
import social from "../images/social.jpg";
import english from "../images/english.png"
import {MessageCircleMore} from "lucide-react";
import {Link} from "react-router-dom";
import subject from "../json/subject.json"
const Dashboard = (props) => {
  const dataToPass = { name: 'John Doe', age: 25 };
    const handlePhyicsClick = () => {
        console.log("Button clicked!");
    };
    const handleChemistryClick = () => {
        console.log("Button clicked!");
    };
    const handleMathsClick = () => {
        console.log("Button clicked!");
    };
    const handleBiologyClick = () => {
        console.log("Button clicked!");
    };

    return (
        <div className={"h-screen flex flex-col justify-between"}>
            <div className="h-1/5 bg-inherit flex-row flex justify-between">
                <div className="h-inherit w-[50%] flex-col flex text-left justify-around">
                    <h1 className="font-poppins font-bold text-[25px]">Dashboard</h1>
                    <h1 className="font-poppins font-bold text-[45px]">
                        Welcome, John Doe
                    </h1>
                </div>
                <div className="h-inherit flex-row flex justify-evenly items-center">
                    <MessageCircleMore className="h-[50px] w-[50px] mr-10"/>
                    <img src={boy} className="h-[100px] w-[100px]" alt={"avatar"}/>
                </div>
            </div>
            <div className="h-[100px] w-6/7 rounded-3xl relative flex-row flex justify-around">
                <div className="h-[100px] bg-[#d9d9d9] w-[66%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
                    <div
                        className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-around items-center">
                        <img src={gift} className="h-[70px]"/>
                        <h1 className="font-semibold text-3xl">Your Daily Quest is here !</h1>
                        <div className="h-[50px] bg-[#b47ede] w-[90px] rounded-2xl justify-center items-center flex">
                            <h1 className="text-center text-white font-semibold">Try now</h1>
                        </div>
                    </div>
                </div>
                <div
                    className={"w-[10%] pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                    <span className={"font-semibold"}>Consistency</span>
                    <span className={"text-4xl font-bold"}>8</span>
                </div>

                <div
                    className={"w-[10%] pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                    <span className={"font-semibold"}>Your Best</span>
                    <span className={"text-4xl font-bold"}>40</span>
                </div>
            </div>
            <div className="h-1/4 w-[70%] rounded-3xl ml-[150px] relative flex-row flex mb-5 justify-center">
        <Link
          to={{ pathname: '/subject/physics', }}
          className="h-inherit w-[30%] rounded-3xl relative flex-row flex mr-10 cursor-pointer"
          onClick={handlePhyicsClick}
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
          to={{ pathname: '/subject/chemistry', }}
          className="h-inherit w-[30%] rounded-3xl relative flex-row flex ml-10 cursor-pointer"
          onClick={handleChemistryClick}
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
          to={{ pathname: '/subject/social', }}
          className="h-inherit w-[30%] rounded-3xl relative flex-row flex ml-20 cursor-pointer"
          onClick={handleChemistryClick}
        >
          <img
            src={social}
            className="rounded-3xl brightness-50 object-cover w-[100%]"
          />
          <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">
            Social
          </p>
        </Link>
      </div>
      <div className="h-1/4 w-[70%] rounded-3xl ml-[150px] relative flex-row flex mb-5 justify-center">
        <Link
          to={{ pathname: '/subject/maths', }}
          className="h-inherit w-[30%] rounded-3xl relative flex-row flex mr-10 cursor-pointer"
          onClick={handleMathsClick}
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
          to={{ pathname: '/subject/biology', }}
          className="h-inherit w-[30%] rounded-3xl relative flex-row flex ml-10 cursor-pointer"
          onClick={handleBiologyClick}
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
          to={{ pathname: '/subject/english', }}
          className="h-inherit w-[30%] rounded-3xl relative flex-row flex ml-20 cursor-pointer"
          onClick={handleChemistryClick}
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
    );
};

export default Dashboard;
