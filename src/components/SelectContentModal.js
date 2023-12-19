import React from "react";
import {Link} from "react-router-dom";
import threeDdModel from "../images/3d-model.png";
import gamifiedlearning from "../images/gamified-learning.jpeg";
import quizzes from "../images/quizzes.jpeg";
import {Howl} from "howler";
import intro_audio from "../music/intro.mp3";
import forest_audio from "../music/forest.mp3";

const SelectContentModal = ({
                              isOpen,
                              onOpen,
                              onClose,
                              modalTitle,
                              modalContent,
                              subject,
                            }) => {
  const playsound = () => {
    const intro = new Howl({
      src: [intro_audio]
    })
    const forest = new Howl({
      src: [forest_audio]
    })

    forest.play();
    intro.play();
  }
  const openModal = () => {
    onOpen();
  };

  const closeModal = () => {
    onClose();
  };
  console.log(subject);
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
            className="bg-white p-8 rounded-3xl flex flex-col items-center justify-around"
            onClick={(e) => e.stopPropagation()} // Prevents modal from closing when clicked inside
          >
            {/* Modal Content */}
            <p className="text-3xl font-semibold mt-5 mb-10">{modalTitle}</p>
            <div className="flex flex-row w-[900px] justify-around">
              <Link to="/threedmodel" className="relative cursor-pointer">
                <img
                  src={threeDdModel}
                  className="rounded-3xl brightness-50 object-cover w-[250px] h-[230px]"
                  alt="3D Model"
                />
                <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
                  3D Model
                </p>
              </Link>
              {subject == "physics" ? (
                <Link
                    to={`/storygame/${subject}`}
                    className="relative cursor-pointer"
                    onClick={playsound}
                >
                  <img
                    src={gamifiedlearning}
                    className="rounded-3xl brightness-50 object-cover w-[250px] h-[230px]"
                  />
                  <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
                    Gamified Learning
                  </p>
                </Link>
              ) : (
                <Link
                    to={`/storygame2/${subject}`}
                    className="relative cursor-pointer"
                    onClick={playsound}
                >
                  <img
                    src={gamifiedlearning}
                    className="rounded-3xl brightness-50 object-cover w-[250px] h-[230px]"
                  />
                  <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
                    Gamified Learning
                  </p>
                </Link>
              )}
              <Link to={`/interactivequiz/${subject}`} className="relative cursor-pointer">
                  <img
                      src={quizzes}
                      className="rounded-3xl brightness-50 object-cover w-[250px] h-[230px]"
                      alt="Interactive Quizzes"
                  />
                  <p className="absolute text-white font-bold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl text-center">
                      Interactive Quizzes
                  </p>
              </Link>
            </div>
            {/* Close Button */}
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-7"
              onClick={closeModal}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectContentModal;
