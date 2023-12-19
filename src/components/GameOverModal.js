import React, { useState } from "react";
import { Link } from "react-router-dom";
import threeDdModel from "../images/3d-model.png";
import gamifiedlearning from "../images/gamified-learning.jpeg";
import quizzes from "../images/quizzes.jpeg";
import Chapter1 from "../pages/Chapter1";
import boyrunning from "../images/boyrunning.jpg";
import boyshocking from "../images/boyscary.png";
import jungle from "../images/gamified-learning.jpeg";
const GameOverModal = ({
  isOpen,
  onOpen,
  onClose,
  modalTitle,
  modalContent,
  score,
  subject
}) => {
  const openModal = () => {
    onOpen();
  };

  const closeModal = () => {
    onClose();
  };

  return (
    <div>
      {/* Button to open the modal */}

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-around bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-8 rounded-3xl flex flex-col items-center justify-around bg-cover bg-center"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicked inside
          >
            {/* Modal Content */}
            <p className="text-3xl font-semibold mt-5 mb-10">{modalTitle}</p>
            <div className="flex flex-row w-[900px] justify-around">
              <div className="h-[200px] flex flex-row items-center">
                <div
                  className="h-[330px] w-[250px] bg-cover bg-center flex flex-col mb-10"
                  style={{ backgroundImage: `url(${boyshocking})` }}
                ></div>
              </div>

              <div
                    className={"w-[250px] pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black justify-around"}>
                    <span className={"font-semibold text-[20px]"}>Your Score</span>
                    <span className={"text-[100px] font-bold"}>{score}</span>
                </div>
              <Link to={`/storygame/${subject}`} className="relative cursor-pointer">
                <img
                  src={gamifiedlearning}
                  className="rounded-3xl brightness-50 object-cover w-[250px] h-[230px]"
                />
                <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
                  Try Again
                </p>
              </Link>
            </div>
            {/* Close Button */}
            <Link to={"/dashboard"}>
            <div
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-7"
            >
              Quit
            </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameOverModal;
