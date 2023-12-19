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
import { Link,useParams } from "react-router-dom";
import { useState } from "react";
import SelectContentModal from "../components/SelectContentModal.js";
import jungle from "../images/maintemple.jpg";
import rulesmap from "../images/oldmapwithoutbg.png";
import { TypeAnimation } from "react-type-animation";
import physicslogo from "../images/physicsstart.png";
import cloudleft from "../images/cloudleft.png";
import cloudright from "../images/cloudright.jpg";
import boyshocking from "../images/boyscary.png";
import AnimatedTyping from "../components/AnimatedTyping.js";
import boylooking from "../images/boylooking.png";
import tigerscary from "../images/pandasad.png";
import snake from "../images/panther.png";
import treeBoard from "../images/treeboard.png";
import questiontree from "../images/questiontree.png";
import GameOverModal from "../components/GameOverModal.js";
import happytiger from "../images/happypanda.png";
import boyrunning from "../images/boyrunning.jpg";
import walkingtiger from "../images/walkingpanda.jpg"
import trashpaper from "../images/trashpaper.jpg";
import sub from "../json/subject.json";
import GameOverModal2 from "../components/GameOverModal2.js";
const Chapter2 = () => {
  const { subject } = useParams();
  const subjectdetails = sub[subject];
  const questions = subjectdetails.chapters[0].questions;
  const [iscontentstate, setcontentstate] = useState(0);
  const [isanswer, setanswer] = useState("-1");
  const [ispaperopen, setpaperopen] = useState(false);
  const [isScore, setScore] = useState(0);
  const contentchange = () => {
    setTimeout(() => {
      setcontentstate(iscontentstate + 1);
    }, 2000); // 2000 milliseconds (2 seconds)
  };
  const CheckAnswer = (number) => {
    if (isanswer == questions[number].answer) {
      setcontentstate(iscontentstate + 1);
      setScore(isScore + 1);
    } else {
      setcontentstate(-1);
      setIsModalOpen(true);
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div
      className="min-h-screen w-screen bg-cover bg-center flex flex-col items-center justify-start"
      style={{ backgroundImage: `url(${jungle})` }}
    >
      {iscontentstate == -1 ? (
        <div>
          <GameOverModal2
            isOpen={isModalOpen}
            onOpen={openModal}
            onClose={closeModal}
            modalTitle="Game Over !"
            modalContent="This is the custom modal content. You can pass any JSX or string here."
            score={isScore}
            subject={subject}
          />
        </div>
      ) : (
        <div>
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
                  onClick={() => {
                    setcontentstate(iscontentstate + 1);
                  }}
                >
                  <h1 className="font-bold text-center mt-[50px] text-[20px]">
                    Help the Panda!
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
                  className="h-[150px] w-[260px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${snake})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 2 ? (
            <div>
              <div className="h-[350px] w-screen flex flex-row justify-center items-center mt-[30px]">
                <div
                  className="h-[350px] w-[500px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px]"
                  style={{ backgroundImage: `url(${questiontree})` }}
                >
                  <h1 className="text-left mt-[50px] text-[15px] w-[300px] text-white">
                    {questions[0].question}
                  </h1>
                </div>
                <div className="flex-col flex">
                  <div
                    className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                      isanswer != questions[0].options[0] && isanswer != "-1"
                        ? "brightness-[25%]"
                        : "brightness-[100%]"
                    }`}
                    onClick={() => setanswer(questions[0].options[0])}
                    style={{ backgroundImage: `url(${treeBoard})` }}
                  >
                    <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                      {questions[0].options[0]}
                    </h1>
                  </div>
                  <div
                    className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                      isanswer != questions[0].options[1] && isanswer != "-1"
                        ? "brightness-[25%]"
                        : "brightness-[100%]"
                    }`}
                    onClick={() => setanswer(questions[0].options[1])}
                    style={{ backgroundImage: `url(${treeBoard})` }}
                  >
                    <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                      {questions[0].options[1]}
                    </h1>
                  </div>
                  <div
                    className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                      isanswer != questions[0].options[2] && isanswer != "-1"
                        ? "brightness-[25%]"
                        : "brightness-[100%]"
                    }`}
                    onClick={() => setanswer(questions[0].options[2])}
                    style={{ backgroundImage: `url(${treeBoard})` }}
                  >
                    <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                      {questions[0].options[2]}
                    </h1>
                  </div>
                  <div
                    className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                      isanswer != questions[0].options[3] && isanswer != "-1"
                        ? "brightness-[25%]"
                        : "brightness-[100%]"
                    }`}
                    onClick={() => setanswer(questions[0].options[3])}
                    style={{ backgroundImage: `url(${treeBoard})` }}
                  >
                    <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                      {questions[0].options[3]}
                    </h1>
                  </div>
                </div>
                {isanswer != "-1" ? (
                  <div
                    className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer animate-pulse
                }`}
                    style={{ backgroundImage: `url(${treeBoard})` }}
                    onClick={() => {
                      CheckAnswer(0);
                    }}
                  >
                    <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                      Confirm
                    </h1>
                  </div>
                ) : null}
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${boylooking})` }}
                ></div>
                <div
                  className="h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${tigerscary})` }}
                ></div>
                <div
                  className="h-[150px] w-[260px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${snake})` }}
                ></div>
              </div>
            </div>
          ) : null}

          {iscontentstate == 3 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[480px] w-[480px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[60px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping
                    text={[
                      "Holaa!! Thanks for saving me.Now I will help you throughout your journey!!",
                    ]}
                    onComplete={contentchange}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${boylooking})` }}
                ></div>
                <div
                  className="h-[150px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${happytiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 4 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[480px] w-[480px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[60px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping
                    text={[
                      "The only way to escape this temple is to learn physics. Search for hints, to escape the temple!!",
                    ]}
                    onComplete={contentchange}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${boylooking})` }}
                ></div>
                <div
                  className="h-[150px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${happytiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 5 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[480px] w-[480px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[60px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping
                    text={[
                      "Let's Gooooooo...!",
                    ]}
                    onComplete={contentchange}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${boyrunning})` }}
                ></div>
                <div
                  className="h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${tigerscary})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 6 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[480px] w-[480px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[60px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping
                    text={[
                      "Search for hints...!",
                    ]}
                    onComplete={contentchange}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${boyrunning})` }}
                ></div>
                <div
                  className="h-[150px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${walkingtiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 7 ? (
            <div className="mt-[100px]">
               <div className="h-[200px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[300px] w-[300px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping text={["There is an hint for you...!!"]} />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${boylooking})` }}
                ></div>
                <div
                  className="h-[70px] w-[60px] bg-cover bg-center flex flex-col animate-spin mt-[250px] cursor-pointer"
                  style={{ backgroundImage: `url(${trashpaper})` }}
                ></div>
                <div
                  className="h-[150px] w-[250px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${happytiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Chapter2;
