import physicsanimate from "../images/physics-animate-main.jpg";
import chemistryanimate from "../images/chemistryanimate.png"
import biologyanimate from "../images/biology-animate-main.png";
import cubeanimate from "../images/cube-animate-main.png";
import coneanimate from "../images/cone-animate-main.png";
import socialanimate from "../images/socialanimate.png";
import englishanimate from "../images/englishanimate.jpg"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import sub from "../json/subject.json";
import { Link } from "react-router-dom";
import heart_audio from "../music/heart.mp3";
import { Howl } from "howler";
const ThreeDModel = () => {
  const navigate = useNavigate();
  const { subject, chapter } = useParams();
  const subjectdetails = sub[subject];
  const playsound = (item) => {
    if (item==="Heart"){
      console.log("heart")
    const heart = new Howl({
      src: [heart_audio],
    });

    heart.play();
  }
  };
  return (
    <div className={"flex flex-col justify-between"}>
      <div className="h-1/5 bg-inherit flex-row flex justify-center mb-20">
        <div className="h-inherit w-[80%] flex-row flex text-center justify-around">
        {subject=="physics"?(<img src={physicsanimate} className="h-[70px] animate-spin" />):null}
          {subject=="chemistry"?(<img src={chemistryanimate} className="h-[70px] animate-spin" />):null}
          {subject=="maths"?(<img src={cubeanimate} className="h-[70px] animate-spin" />):null}
          {subject=="biology"?(<img src={biologyanimate} className="h-[70px] animate-spin" />):null}
          {subject=="social"?(<img src={socialanimate} className="h-[70px] animate-spin" />):null}
          {subject=="english"?(<img src={englishanimate} className="h-[70px] animate-spin" />):null}
          <h1 className="font-poppins font-bold text-[45px]">
            3D Model - {sub[subject].chapters[chapter].chaptername}
          </h1>
          {subject=="physics"?(<img src={physicsanimate} className="h-[70px] animate-spin" />):null}
          {subject=="chemistry"?(<img src={chemistryanimate} className="h-[70px] animate-spin" />):null}
          {subject=="maths"?(<img src={cubeanimate} className="h-[70px] animate-spin" />):null}
          {subject=="biology"?(<img src={biologyanimate} className="h-[70px] animate-spin" />):null}
          {subject=="social"?(<img src={socialanimate} className="h-[70px] animate-spin" />):null}
          {subject=="english"?(<img src={englishanimate} className="h-[70px] animate-spin" />):null}
        </div>
      </div>
      {sub[subject].chapters[chapter].threedmodeltopics.map(
        (item, index) => (
          <div className="h-[80px] w-6/7 rounded-3xl relative flex-row flex justify-around mb-10">
            <div className="h-[80px] bg-[#d9d9d9] w-[100%] rounded-3xl ml-[10px] relative mb-7 flex-row flex">
              <div className="absolute inset-0 bg-inherit shadow-inner rounded-3xl flex-row flex justify-between items-center pr-10 pl-10">
                <h1 className="font-semibold text-3xl">{item.modelname}</h1>
                <Link
                  className="h-[50px] bg-[#b47ede] w-[150px] rounded-2xl justify-center items-center flex cursor-pointer"
                  onClick={()=>playsound(item.modelname)}
                  to={{pathname:`/singlemodel/${item.modelname}`}}
                >
                  <h1 className="text-center text-white font-semibold">Open</h1>
                </Link>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ThreeDModel;
