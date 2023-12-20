import {Button} from "../components/ui/button.tsx";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {Howl} from "howler";
import jungle from "../images/forest1.png";
import cloudleft from "../images/cloudleft.png";
import cloudright from "../images/cloudright.jpg";
import boyshocking from "../images/boyscary.png";
import AnimatedTyping from "../components/AnimatedTyping.js";
import boylooking from "../images/boylooking.png";
import tigerscary from "../images/tigerscary.png";
import snake from "../images/snakeimage.jpg";
import treeBoard from "../images/treeboard.png";
import questiontree from "../images/questiontree.png";
import GameOverModal from "../components/GameOverModal.js";
import happytiger from "../images/happytiger.jpg";
import boyrunning from "../images/boyrunning.jpg";
import walkingtiger from "../images/walkingtiger.png";
import trashpaper from "../images/trashpaper.jpg";
import sub from "../json/subject.json";
import someone_audio from "../music/someone-help-me.mp3";
import hola_audio from "../music/hola.mp3";
import onlyway_audio from "../music/the only way.mp3";
import goo_audio from "../music/lets_goo.mp3";
import search_audio from "../music/serch-for-hints.mp3";
import there_is_hint_audio from "../music/there-is-an-hint.mp3"
import openpaper from "../images/openpaper1.jpg";
import brick from "../images/greenwall.jpg";
import {cn} from "../lib/utils.ts";
import jungleriver from "../images/jungleriver.jpg";
import didyouhear_audio from "../music/didyouhear.mp3";
import reached_audio from "../music/reached.mp3";

const Chapter1 = () => {
  const {subject} = useParams();
  const subjectdetails = sub[subject];
  const questions = subjectdetails.chapters[0].questions;
  const [iscontentstate, setcontentstate] = useState(0);
  const [isanswer, setanswer] = useState("");
  const [secondlaw, setsecondlaw] = useState("");
  const [ispaperopen, setpaperopen] = useState(false);
  const [isScore, setScore] = useState(0);
  const [boyPosition, setBoyPosition] = useState(0);
  const [tigerPosition, setTigerPosition] = useState(0);
  const [moved, setmoved] = useState(false);
  const [win, setwin] = useState(false)
  const contentchange = () => {
    // setTimeout(() => {
    setcontentstate(iscontentstate + 1);
    // }, 2000); // 2000 milliseconds (2 seconds)
  };

  useEffect(() => {
    if (secondlaw.length >= 2 && secondlaw !== "ma") {
      setsecondlaw("");
    }
    if (secondlaw === "ma") {
      console.log("ma");
      setwin(true)
    }
  }, [secondlaw])
  const CheckAnswer = (number) => {
    if (isanswer == questions[number].answer) {
      setcontentstate(iscontentstate + 1);
      setScore(isScore + 1);
    } else {
      setcontentstate(-1);
      setIsModalOpen(true);
    }
  };

  const Move = () => {
    setBoyPosition(boyPosition + 20);
    setTigerPosition(tigerPosition + 20);
  };

  const startMoving = () => {
    // Call Move immediately
    setcontentstate(iscontentstate + 1);
    setmoved(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  useEffect(() => {
    if (iscontentstate === 1) {
      const someone = new Howl({
        src: [someone_audio]
      })

      someone.play();

    }
    if (iscontentstate === 3) {
      const hola = new Howl({
        src: [hola_audio]
      })
      hola.play();
    }
    if (iscontentstate === 4) {
      const onlyway = new Howl({
        src: [onlyway_audio]
      })
      onlyway.play();
    }
    if (iscontentstate === 5) {
      const goo = new Howl({
        src: [goo_audio]
      })
      goo.play();
    }
    if (iscontentstate === 6) {
      const search = new Howl({
        src: [search_audio]
      })
      search.play();
    }
    if (iscontentstate === 7) {
      const there_is_hint = new Howl({
        src: [there_is_hint_audio]
      })
      there_is_hint.play();
    }
    if (iscontentstate === 9) {
      const goo = new Howl({
        src: [goo_audio]
      })
      goo.play();
    }
    if (iscontentstate === 10) {
      const didyouhear = new Howl({
        src: [didyouhear_audio]
      })
      didyouhear.play();
    }
    if (iscontentstate === 11) {
      const reached = new Howl({
        src: [reached_audio]
      })
      reached.play();
    }
  }, [iscontentstate]);

  return (
      <div
          className="min-h-screen w-screen bg-cover bg-center flex flex-col items-center justify-start"
          style={{backgroundImage: iscontentstate <= 10 ? (`url(${jungle})`) : (`url(${jungleriver})`)}}
      >
        {iscontentstate == -1 ? (
            <div>
              <GameOverModal
                  isOpen={isModalOpen}
            onOpen={openModal}
            onClose={closeModal}
            modalTitle="Game Over !"
            modalContent="This is the custom modal content. You can pass any JSX or string here."
            score={iscontentstate}
          />
        </div>
      ) : (
        <div>
          {iscontentstate == 0 ? (
            <div>
              <div className="h-[200px] w-screen flex flex-row justify-center items-center mt-[180px] mb-[50px]">
                <div
                    className="h-[300px] w-[300px] bg-cover bg-center  flex flex-col mr-[100px] justify-center text-center items-center pb-[100px]"
                    style={{backgroundImage: `url(${cloudleft})`}}
                >
                  <AnimatedTyping
                    text={[
                      "Woah... Wh...Where am I....Whhat's that sound in there ??!!",
                    ]}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-start items-center">
                <div
                    className="h-[500px] w-[200px] bg-cover bg-center flex flex-col ml-[200px]"
                    style={{backgroundImage: `url(${boyshocking})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>
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
                      className="h-[350px] w-[500px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px]"
                      style={{backgroundImage: `url(${questiontree})`}}
                  >
                    <h1 className="text-left mt-[50px] text-[15px] w-[300px] text-white">
                      {questions[0].question}
                    </h1>
                  </div>
                  <div className="flex-col flex">
                    <div
                        className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                            isanswer != questions[0].options[0] && isanswer != ""
                                ? "brightness-[25%]"
                                : "brightness-[100%]"
                        }`}
                        onClick={() => setanswer(questions[0].options[0])}
                        style={{backgroundImage: `url(${treeBoard})`}}
                    >
                      <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                        {questions[0].options[0]}
                      </h1>
                    </div>
                    <div
                        className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                            isanswer != questions[0].options[1] && isanswer != ""
                                ? "brightness-[25%]"
                                : "brightness-[100%]"
                        }`}
                        onClick={() => setanswer(questions[0].options[1])}
                        style={{backgroundImage: `url(${treeBoard})`}}
                    >
                      <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                        {questions[0].options[1]}
                      </h1>
                    </div>
                    <div
                        className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                            isanswer != questions[0].options[2] && isanswer != ""
                                ? "brightness-[25%]"
                                : "brightness-[100%]"
                        }`}
                        onClick={() => setanswer(questions[0].options[2])}
                        style={{backgroundImage: `url(${treeBoard})`}}
                    >
                      <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                        {questions[0].options[2]}
                      </h1>
                    </div>
                    <div
                        className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer ${
                            isanswer != questions[0].options[3] && isanswer != ""
                                ? "brightness-[25%]"
                                : "brightness-[100%]"
                        }`}
                        onClick={() => setanswer(questions[0].options[3])}
                        style={{backgroundImage: `url(${treeBoard})`}}
                    >
                      <h1 className="text-left mt-[50px] text-[15px] text-black font-bold">
                        {questions[0].options[3]}
                      </h1>
                    </div>
                  </div>
                  {isanswer != "" ? (
                      <div
                          className={`h-[80px] w-[200px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px] cursor-pointer animate-pulse
                }`}
                          style={{backgroundImage: `url(${treeBoard})`}}
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
                      style={{backgroundImage: `url(${boylooking})`}}
                  ></div>
                  <div
                      className="h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-bounce"
                      style={{backgroundImage: `url(${tigerscary})`}}
                  ></div>
                  <div
                      className="h-[150px] w-[220px] bg-cover bg-center flex flex-col"
                      style={{backgroundImage: `url(${snake})`}}
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
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                    className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                    style={{backgroundImage: `url(${boylooking})`}}
                ></div>
                <div
                    className="h-[150px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                    style={{backgroundImage: `url(${happytiger})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>
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
                      "The only way to escape this forest is to learn physics. Search for hints, to escape the forest!!",
                    ]}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                    className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                    style={{backgroundImage: `url(${boylooking})`}}
                ></div>
                <div
                    className="h-[150px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                    style={{backgroundImage: `url(${happytiger})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>

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
                    style={{backgroundImage: `url(${boyrunning})`}}
                ></div>
                <div
                    className="h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-bounce"
                    style={{backgroundImage: `url(${tigerscary})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>

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
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                    className="h-[500px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                    style={{backgroundImage: `url(${boyrunning})`}}
                ></div>
                <div
                    className="h-[150px] w-[200px] bg-cover bg-center flex flex-col animate-bounce"
                    style={{backgroundImage: `url(${walkingtiger})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>

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
                  onClick={contentchange}
                ></div>
                <div
                  className="h-[150px] w-[250px] bg-cover bg-center flex flex-col animate-bounce"
                  style={{ backgroundImage: `url(${happytiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 8 ? (
            <div className="mt-[100px]">
              <div className="h-[200px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[300px] w-[300px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[50px]"
                  style={{ backgroundImage: `url(${openpaper})` }}
                >
                  <h1 className="w-[280px] text-center">
                    {subjectdetails.chapters[0].content[0]}
                  </h1>
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                  className="h-[500px] w-[200px] bg-cover bg-center flex flex-col"
                  style={{ backgroundImage: `url(${boylooking})` }}
                ></div>
                <div
                  className="h-[50px] w-[140px] bg-cover bg-center flex flex-col mt-[250px] cursor-pointer bg-white rounded-2xl text-center justify-center animate-pulse"
                  style={{ backgroundImage: `url(${brick})` }}
                  onClick={startMoving}
                >
                  <h1 className="text-white">Continue</h1>
                </div>
                <div
                  className="h-[150px] w-[250px] bg-cover bg-center flex flex-col animate-none"
                  style={{ backgroundImage: `url(${happytiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
          {iscontentstate == 9 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[480px] w-[480px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[60px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping
                    text={["Let's Gooooooo...!"]}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                    className={cn(
                        `h-[500px] w-[200px] bg-cover bg-center flex flex-col animate-bounce transform translate-x-5`
                    )}
                    style={{backgroundImage: `url(${boyrunning})`}}
                ></div>
                <div
                    className={`h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-none ml-[${tigerPosition}px]`}
                    style={{backgroundImage: `url(${walkingtiger})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>
            </div>
          ) : null}
          {iscontentstate == 10 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                  className="h-[480px] w-[480px] bg-cover bg-center flex flex-col mr-[130px] justify-center text-center items-center pb-[60px]"
                  style={{ backgroundImage: `url(${cloudright})` }}
                >
                  <AnimatedTyping
                    text={["Ohhhhh!!.. Did you hear that sound!!??"]}
                  />
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-around items-center">
                <div
                    className={cn(
                        `h-[500px] w-[200px] bg-cover bg-center flex flex-col animate-none transform translate-x-5`
                    )}
                    style={{backgroundImage: `url(${boyshocking})`}}
                ></div>
                <div
                    className={`h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-none ml-[${tigerPosition}px]`}
                    style={{backgroundImage: `url(${tigerscary})`}}
                ></div>
              </div>
              <Button onClick={contentchange}>Click To Continue</Button>
            </div>
          ) : null}
          {iscontentstate == 11 ? (
            <div className="mt-[100px]">
              <div className="h-[250px] w-screen flex flex-row justify-center items-center mb-[50px]">
                <div
                    className="h-[280px] w-[280px] bg-cover bg-center flex flex-col justify-center text-center items-center pb-[60px]"
                    style={{backgroundImage: `url(${cloudleft})`}}
                >{!win && <AnimatedTyping
                    text={["We have reached the river!!"]}
                />}{win && <AnimatedTyping
                    text={["We won!!"]}
                />}

                </div>
                <div
                    className="h-[80px] w-[180px] rounded-3xl bg-cover bg-center flex flex-row justify-center text-center items-center ml-[200px]"
                    style={{backgroundImage: `url(${brick})`}}
                >
                  <h1 className="font-bold text-white text-3xl">F=</h1>
                  <input className="font-bold text-white text-2xl w-[70px] bg-inherit border-2 rounded-2xl"
                         value={secondlaw} onChange={(e) => {
                    setsecondlaw(e.target.value)
                  }}/>
                </div>
              </div>
              <div className="h-[200px] w-screen flex flex-row justify-start items-center">
                <div
                  className={cn(
                      `h-[500px] w-[200px] bg-cover bg-center flex flex-col animate-none transition-transform hover:translate-x-20 duration-800 ease-in-out mr-[150px]`, win ? "absolute right-1" : ""
                  )}
                  style={{ backgroundImage: `url(${boyshocking})` }}
                ></div>
                <div
                  className={`h-[200px] w-[170px] bg-cover bg-center flex flex-col animate-none transition-transform hover:animate-bounce hover:translate-x-20 duration-800 ease-in-out`}
                  style={{ backgroundImage: `url(${walkingtiger})` }}
                ></div>
              </div>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default Chapter1;
