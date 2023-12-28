import {useParams} from "react-router-dom";
import {useState} from "react";
import SelectContentModal from "../components/SelectContentModal.js";
import sub from "../json/subject.json";

const Subject = () => {
  const { subject } = useParams();
  const subjectdetails = sub[subject];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chapter,setChapter]=useState(0);
  const openModal = (i) => {
    setIsModalOpen(true);
    setChapter(i);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
  const scores = JSON.parse(localStorage.getItem("scores")).filter(obj=>obj.studentId === currentUser.id)
  const sumBySubject = scores.reduce((result, entry) => {
    const subject = entry.subject;
    result[subject] = (result[subject] || 0) + entry.score;
    return result;
  }, {});
  let totalScore=0;
  if (sumBySubject[subject]){
    totalScore = sumBySubject[subject]
  }
  return (

    <div className={"flex flex-col justify-between"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-center mb-20">
        <div className="h-inherit w-[40%] flex-row flex text-center justify-around">
          <img src={subjectdetails.logo} className="h-[70px] animate-spin" />
          <h1 className="font-poppins font-bold text-[45px]">
            {subjectdetails.name} 
          </h1>
          <img src={subjectdetails.logo} className="h-[70px] animate-spin" />
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
              <span className={"text-3xl font-bold text-black"}>{totalScore}</span>
            </div>
          </div>
        </div>

        <div className="h-[100px] w-[36%] bg-black rounded-3xl ml-[10px] relative mb-7 flex-row flex">
          <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
            <h1 className="font-semibold text-3xl text-white">
              Your Completion
            </h1>
            <div
              className={
                "w-1/4 h-4/5 pr-5 pl-5 flex flex-col rounded-2xl bg-white dark:bg-white text-center text-white dark:text-black justify-center"
              }
            >
              <span className={"text-3xl font-bold text-black"}>0%</span>
            </div>
          </div>
        </div>
      </div>
      {subjectdetails.chapters.map((item, index) => (
        <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
          <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
            <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
              <h1 className="font-semibold text-3xl">{item.chaptername}</h1>
              <div
                className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer"
                onClick={()=>{openModal(index)}}
              >
                <h1 className="text-center text-white font-semibold">
                  Continue
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}

      <SelectContentModal
        isOpen={isModalOpen}
        onOpen={openModal}
        onClose={closeModal}
        modalTitle="Choose your way!"
        modalContent="This is the custom modal content. You can pass any JSX or string here."
        subject={subject}
        chapter={chapter}
      />
    </div>
  );
};

export default Subject;
