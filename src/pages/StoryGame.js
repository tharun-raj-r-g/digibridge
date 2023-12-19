import physicsanimate from "../images/physics-animate-main.jpg";
import {Link, useParams} from "react-router-dom";
import jungle from "../images/jungle.jpg";
import rulesmap from "../images/oldmapwithoutbg.png";
import {TypeAnimation} from "react-type-animation";
import physicslogo from "../images/physicsstart.png";
import sub from "../json/subject.json";
import {Howl} from "howler";
import sound_file from "../music/whereami.mp3";
import forest_audio from "../music/forest.mp3"

const StoryGame = () => {
    const playsound = () => {
        const sound = new Howl({
            src: [sound_file]
        })
        const forest = new Howl({
            src: [forest_audio]
        })

        sound.play();
        forest.play();
    }
    const {subject} = useParams();
    const subjectdetails = sub[subject];
    return (
        <div className="min-h-screen w-screen bg-cover bg-center flex flex-col"
             style={{backgroundImage: `url(${jungle})`}}>
            <div className="h-1/5 bg-inherit flex-row flex justify-center mt-10 mb-10">
                <div className="h-inherit w-[60%] flex-row flex text-center justify-around">
                    <img src={physicsanimate} className="h-[70px] animate-bounce"/>
                    <h1 className="font-poppins font-bold text-[45px]">Escape the Jungle</h1>
                    <img src={physicsanimate} className="h-[70px] animate-bounce"/>
                </div>
      </div>
      <div className="h-[480px] w-[40%] flex-col flex bg-contain ml-[440px] text-left items-center justify-center" style={{backgroundImage:`url(${rulesmap})`}}>
      <TypeAnimation
        sequence={[
            `Welcome, Intrepid ${subjectdetails.name} Explorer!\nYou've entered the heart of ${subjectdetails.name} Forest, where the path to freedom
          winds through the wisdom of ${subjectdetails.name}.\n\n The forest hold secrets,
          and each challenge you face is a step towards unlocking them.`,
            1000,
        ]}
        speed={80}
        style={{ whiteSpace: 'pre-line'}}
        className="h-[50%] w-[50%] mr-20 text-`xl"
        
      />
      </div>
      <div className="w-screen items-center flex text-center flex-col">
          <Link to={`/chapter1/${subject}`} onClick={playsound}>
              <img src={physicslogo} className="h-[100px] w-[100px] cursor-pointer animate-pulse"/>
              <p className="text-white animate-pulse">Click to start !</p>
          </Link>
      </div>
      
    </div>
  );
};

export default StoryGame;
