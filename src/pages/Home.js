import boy from "../images/boy1.png";
import physics from "../images/physics.jpg";
import chemistry from "../images/chemistry.jpg";
import maths from "../images/maths.jpg";
import biology from "../images/biology.png";
import gift from "../images/gift.png";
import { MessageSquare, MessageCircleMore } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { Link } from "react-router-dom";
const Home = () => {
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
        <div className={"h-[93vh] flex flex-col justify-between"}>
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
                    <span className={"font-semibold"}>Streak</span>
                    <span className={"text-4xl font-bold"}>8</span>
                </div>

                <div
                    className={"w-[10%] pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                    <span className={"font-semibold"}>Peak</span>
                    <span className={"text-4xl font-bold"}>40</span>
                </div>
            </div>
            <div className="rounded-3xl mb-5 flex justify-center">
                <div className={"w-2/3 gap-10 grid grid-cols-2  justify-items-center"}>
                    <div className="w-[70%] rounded-3xl relative  cursor-pointer"
                         onClick={handlePhyicsClick}>
                        <img src={physics} className="h-[150px] rounded-3xl brightness-50 object-cover w-[100%]"/>
                        <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">Physics</p>
                    </div>

                    <div className=" w-[70%] rounded-3xl relative cursor-pointer"
                         onClick={handleChemistryClick}>
                        <img src={chemistry} className="h-[150px] rounded-3xl brightness-50 object-cover w-[100%]"/>
                        <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">Chemistry</p>
                    </div>
                    <div className=" w-[70%] rounded-3xl relative  cursor-pointer"
                         onClick={handleMathsClick}>
                        <img src={maths} className="h-[150px] rounded-3xl brightness-50 object-cover w-[100%]"/>
                        <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">Maths</p>
                    </div>
                    <div className=" w-[70%] rounded-3xl relative cursor-pointer"
                         onClick={handleBiologyClick}>
                        <img src={biology} className="h-[150px] rounded-3xl brightness-50 object-cover w-[100%]"/>
                        <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl">Biology</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
