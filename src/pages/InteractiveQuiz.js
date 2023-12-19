import physicsanimate from "../images/physics-animate-main.jpg";
import {useParams} from "react-router-dom";
import {useState} from "react";
import SelectContentModal from "../components/SelectContentModal.js";

const InteractiveQuiz = () => {
    const {subject} = useParams();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

  return (
    <div className={"flex flex-col justify-between"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-center mb-20">
        <div className="h-inherit w-[40%] flex-row flex text-center justify-around">
            <img src={physicsanimate} className="h-[70px] animate-spin"/>
            <h1 className="font-poppins font-bold text-[45px] capitalize">{subject}</h1>
            <img src={physicsanimate} className="h-[70px] animate-spin"/>
        </div>
      </div>
      <div className="h-[100px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[100px] w-[36%] bg-black rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl text-white">Your Score</h1>
            <div
              className={
                "w-1/4 h-4/5 pr-5 pl-5 flex flex-col rounded-2xl bg-white dark:bg-white text-center text-white dark:text-black justify-center"
              }
            >
              <span className={"text-3xl font-bold text-black"}>700</span>
            </div>
          </div>
        </div>

        <div className="h-[100px] w-[36%] bg-black rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl text-white">Your Completion</h1>
            <div
              className={
                "w-1/4 h-4/5 pr-5 pl-5 flex flex-col rounded-2xl bg-white dark:bg-white text-center text-white dark:text-black justify-center"
              }
            >
              <span className={"text-3xl font-bold text-black"}>75%</span>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">Electricity</h1>
            <div className="h-[50px] bg-white w-[150px] rounded-2xl justify-center items-center flex cursor-pointer" onClick={openModal}>
              <h1 className="text-center text-[#b47ede] font-semibold">Continue</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">
              Magnetic Effects of Electric Current
            </h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-white font-semibold">Start</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">Sources of Energy</h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-white font-semibold">Start</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">Our Environment</h1>
            <div className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-white font-semibold">Start</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
        <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl">
              Management of Natural Resources
            </h1>
            <div className="h-[50px] bg-[#eee] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer">
              <h1 className="text-center text-black font-semibold">
                Completed
              </h1>
            </div>
          </div>
        </div>
      </div>
      <SelectContentModal
        isOpen={isModalOpen}
        onOpen={openModal}
        onClose={closeModal}
        modalTitle="Choose your way!"
        modalContent="This is the custom modal content. You can pass any JSX or string here."
      />
    </div>
  );
};

export default InteractiveQuiz;
