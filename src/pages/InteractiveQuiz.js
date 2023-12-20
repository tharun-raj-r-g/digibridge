import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useRef, useState} from "react";
import sub from "../json/subject.json"
import video from "../images/video/inductor.mp4"
import {Counter} from "../components/Counter";
import {cn} from "../lib/utils";
import {Button} from "../components/ui/button";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle
} from "../components/ui/alert-dialog";

const InteractiveQuiz = () => {
    const {subject, chapter} = useParams();
    const videoRef = useRef(null);

    const chapterObj = sub[subject].chapters[chapter];

    const [time, setTime] = useState();
    const [timeRunning, setTimeRunning] = useState(true);
    const [initialTime, setInitialTime] = useState(10);
    const [currentTime, setCurrentTime] = useState(0);
    const [state, setState] = useState(0);
    const [disp, setDisp] = useState(false);
    const [score, setScore] = useState(0);
    const [key, setKey] = useState(-1);
    const [answered, setAnswered] = useState(false)
    const [selectedAnswer, setSelectedAnswer] = useState("")
    const [qstate, setQState] = useState(0)

    const onComplete = () => {
        if (state % 2 === 0) {
            videoRef.current.pause();
            setDisp(true);
            setState(state + 1);
            setKey(state);
            setTimeRunning(true);

        } else {
            handleNext();
            setDisp(false);
            videoRef.current.play();
        }
    };
    const handleClick = (option) => {
        setAnswered(true);
        setSelectedAnswer(option);
        setTimeRunning(false);
        if (chapterObj.questions[qstate].answer === option) {
            setScore(score + 1);
        }

    }
    useEffect(() => {
        const video = videoRef.current;

        const handleTimeUpdate = () => {
            // Update the current time whenever the playback time changes
            setCurrentTime(video.currentTime);
        };

        // Add a timeupdate event listener
        video.addEventListener('timeupdate', handleTimeUpdate);

        // Clean up the event listener on component unmount
        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
        };
    }, []); // Empty dependency array to ensure the effect runs only once

    // const handlePlay = () => {
    //     // Play the video
    //     videoRef.current.play();
    //     setTimeRunning(true)
    // };
    //
    // const handlePause = () => {
    //     // Pause the video
    //     videoRef.current.pause();
    //     setTimeRunning(false)
    // };
    const [alertDialog, setAlertDialog] = useState(false);
    const handleNext = () => {
        if (qstate === chapterObj.questions.length - 1) {
            setAlertDialog(true)
            videoRef.current.pause();
        } else {
            setState(state + 1);

            setQState(qstate + 1);
            videoRef.current.play();
            setAnswered(false);
            setDisp(false);
            setKey(state);
            setTimeRunning(true);
            videoRef.current.play();
        }
    }
    useEffect(() => {
        videoRef.current.play();
    }, [])
    useEffect(() => {
        console.log(state, qstate);
    })
    const navigate = useNavigate();

    return (
        <div className={"flex flex-col justify-between"}>
            <AlertDialog open={alertDialog}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Congratulations!!</AlertDialogTitle>
                        <AlertDialogDescription>
                            You have scored: <strong>{score}</strong>.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogAction onClick={() => navigate("/dashboard")}>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
            <div className="h-1/5 bg-inherit flex-row flex justify-center mb-10">
                <div className="h-inherit w-[40%] flex-row flex text-center justify-around">
                    <h1 className=" font-bold text-[35px] capitalize">{subject} - {chapterObj.chaptername}</h1>
                </div>
            </div>
            <div className={"flex flex-row"}>
                <video width="820"
                       height="500"
                       ref={videoRef}
                       controls
                    // onPlay={handlePlay}
                    // onPause={handlePause}
                >
                    <source src={video} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <div className={"justify-evenly flex flex-col w-full"}>
                    <Counter
                        restart={key}
                        isPlaying={timeRunning}
                        onCompleteFunc={() => {
                            onComplete()
                        }}
                        onUpdateFunc={(remainingTime) => setTime(remainingTime)}
                        time={initialTime}
                    />
                    <div
                        className={cn("rounded-2xl m-4 w-full flex flex-col shadow-2xl border-2 text-center", disp ? "" : "hidden")}>
                        <span>{chapterObj.questions[qstate].question}</span>
                        <div className={"m-3"}>
                            {chapterObj.questions[qstate].options.map((option, index) => (
                                <div key={index}
                                     onClick={() => handleClick(option)}
                                     className={cn("bg-blue-900 text-white m-3 rounded-2xl p-3 hover:bg-blue-950 cursor-pointer",
                                         answered && selectedAnswer === option ? "bg-blue-950" : "")}>
                                    {option}
                                </div>
                            ))}
                        </div>
                        <div className={"flex justify-end m-3"}>
                            <Button variant={"secondary"} disabled={!answered} onClick={handleNext}>Next</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveQuiz;
