import home from "../images/dashboard.png";
import boy from "../images/boy1.png";
import physics from "../images/physics.jpg";
import chemistry from "../images/chemistry.jpg";
import maths from "../images/maths.jpg";
import biology from "../images/biology.png";
import gift from "../images/gift.png";
import physicsanimate from "../images/physics-animate-main.jpg";
import biologyanimate from "../images/biology-animate-main.png";
import cubeanimate from "../images/cube-animate-main.png";
import coneanimate from "../images/cone-animate-main.png";
import { MessageSquare, MessageCircleMore } from "lucide-react";
import { Button } from "../components/ui/button.tsx";
import { Link } from "react-router-dom";
import { useState } from "react";
import SelectContentModal from "../components/SelectContentModal.js";
import jungle from "../images/forest1.png";
import rulesmap from "../images/oldmapwithoutbg.png";
import { TypeAnimation } from "react-type-animation";
import physicslogo from "../images/physicsstart.png";
import cloudleft from "../images/cloudleft.png";
import cloudright from "../images/cloudright.jpg";
import boyshocking from "../images/boyscary.png";
import AnimatedTyping from "../components/AnimatedTyping.js";
import boylooking from "../images/boylooking.png";
import tigerscary from "../images/tigerscary.png";
import snake from "../images/snakeimage.jpg";
import treeBoard from "../images/treeboard.png";
import questiontree from "../images/questiontree.png";
const Chapter1 = () => {
  const [iscontentstate, setcontentstate] = useState(0);
  const [isanswer, setanswer] = useState("");
  const [ispaperopen, setpaperopen] = useState(false);
  const [isScore, setScore] = useState(0);
  const contentchange = () => {
    setTimeout(() => {
      setcontentstate(iscontentstate + 1);
    }, 2000); // 2000 milliseconds (2 seconds)
  };
  const setcontent = () => {
    if (isanswer == "Python") {
      setcontentstate(iscontentstate + 1);
    } else {
      setcontentstate(-1);
    }
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex flex-col items-center justify-start"
      style={{ backgroundImage: `url(${jungle})` }}
    >
      {iscontentstate == 0 ? (
        <div>
          <div className="h-[200px] w-screen flex flex-row justify-center items-center mt-[180px] mb-[50px]">
            <div
              className="h-[300px] w-[300px] bg-cover bg-center flex flex-col mr-[100px] justify-center text-center items-center pb-[100px]"
              style={{ backgroundImage: `url(${cloudleft})` }}
            >
              <AnimatedTyping
                text={[
                  "Woah... Wh...Where am I....Whhat's that sound in there ??!!",
                ]}
                onComplete={contentchange}
              />
            </div>
          </div>
          <div className="h-[200px] w-screen flex flex-row justify-start items-center">
            <div
              className="h-[500px] w-[200px] bg-cover bg-center flex flex-col ml-[200px]"
              style={{ backgroundImage: `url(${boyshocking})` }}
            ></div>
          </div>
        </div>
      ) : null}
      {iscontentstate == 1 ? (
        <div>
          <div className="h-[150px] w-screen flex flex-row justify-center items-center mt-[30px]">
            <div
              className="h-[150px] w-[300px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] animate-pulse cursor-pointer"
              style={{ backgroundImage: `url(${treeBoard})` }}
              onClick={()=>{setcontentstate(iscontentstate + 1)}}
            >
              <h1 className="font-bold text-center mt-[50px] text-[20px]">
                Help the Tiger!
              </h1>
            </div>
          </div>
          <div className="h-[200px] w-screen flex flex-row justify-center items-center mb-[50px]">
            <div
              className="h-[300px] w-[300px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px]"
              style={{ backgroundImage: `url(${cloudright})` }}
            >
              <AnimatedTyping text={["Someone, he...Helppp me...!!"]} />
            </div>
          </div>
          <div className="h-[200px] w-screen flex flex-row justify-around items-center">
            <div
              className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
              style={{ backgroundImage: `url(${boylooking})` }}
            ></div>
            <div
              className="h-[200px] w-[150px] bg-cover bg-center flex flex-col animate-bounce"
              style={{ backgroundImage: `url(${tigerscary})` }}
            ></div>
            <div
              className="h-[150px] w-[220px] bg-cover bg-center flex flex-col"
              style={{ backgroundImage: `url(${snake})` }}
            ></div>
          </div>
        </div>
      ) : null}
      {iscontentstate == 2 ? (
        <div>
          <div className="h-[350px] w-screen flex flex-row justify-center items-center mt-[30px]">
            <div
              className="h-[350px] w-[400px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px]"
              style={{ backgroundImage: `url(${questiontree})` }}
            >
              <h1 className="font-bold text-center mt-[50px] text-[20px]">
                Which of the following is an interpreted, object-oriented,
                high-level programming language with dynamic semantics.
              </h1>
            </div>
          </div>
          <div className="h-[200px] w-screen flex flex-row justify-around items-center">
            <div
              className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
              style={{ backgroundImage: `url(${boylooking})` }}
            ></div>
            <div
              className="h-[200px] w-[150px] bg-cover bg-center flex flex-col animate-bounce"
              style={{ backgroundImage: `url(${tigerscary})` }}
            ></div>
            <div
              className="h-[150px] w-[220px] bg-cover bg-center flex flex-col"
              style={{ backgroundImage: `url(${snake})` }}
            ></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Chapter1;
