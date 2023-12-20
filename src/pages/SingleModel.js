import physicsanimate from "../images/physics-animate-main.jpg";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import sub from "../json/subject.json";
import { Link } from "react-router-dom";
import hydrogen from "../images/hydrogenAR.jpg";
import oxygen from "../images/oxygenAR.jpg";
import heart from "../images/heartAR.png";
import brain from "../images/brain.jpg"
const SingleModel = () => {
  const navigate = useNavigate();
  const { model } = useParams();
  return (
    <div className={"flex flex-col justify-between"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-center mb-20">
        <div className="h-inherit w-[80%] flex-row flex text-center justify-around">
          <img src={physicsanimate} className="h-[70px] animate-spin" />
          <h1 className="font-poppins font-bold text-[45px]">
            AR Model - {model}
          </h1>
          <img src={physicsanimate} className="h-[70px] animate-spin" />
        </div>
      </div>
      <h1 className="text-2xl mb-10">Scan and Explore yourself !</h1>
      {model == "Molecules" ? (
        <div className="flex flex-row justify-center w-[98%]">
          <img src={hydrogen} className="h-[500px] w-[300px]" alt={"avatar"} />
          <img
            src={oxygen}
            className="h-[500px] w-[300px] mr-[50px] ml-[50px]"
            alt={"avatar"}
          />
          <img src={hydrogen} className="h-[500px] w-[300px]" alt={"avatar"} />
        </div>
      ) : null}
      {model == "Heart" ? (
        <div className="flex flex-row justify-center w-[98%]">
          <img src={heart} className="h-[500px] w-[600px] rounded-2xl" alt={"avatar"} />
        </div>
      ) : null}
      {model == "Brain" ? (
        <div className="flex flex-row justify-center w-[98%]">
          <img src={brain} className="h-[500px] w-[700px] rounded-2xl" alt={"avatar"} />
        </div>
      ) : null}
    </div>
  );
};

export default SingleModel;
