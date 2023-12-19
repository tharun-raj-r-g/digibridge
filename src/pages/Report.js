import {Award, MessageCircleMore, Zap} from "lucide-react";
import boy from "../images/boy1.png";
import {useState} from "react";
import PieChart from '../components/PieChart';


const Report = () => {
    const [data, setData] = useState({
        streak: 28,
        peak: 48,
        score: 9.0,
        highest: 8.6,
        courses: [
            {name: 'Physics', progress: 987},
            {name: 'Chemistry', progress: 854},
            {name: 'Biology', progress: 721},
            {name: 'Maths', progress: 618},
        ],
    });

    return (
        <div className={"flex flex-col justify-between"}>
            <div className={"flex flex-row justify-between"}>
                <div className={"flex flex-col align-middle justify-evenly"}>
                    <span className={"text-2xl font-semibold"}>My Report</span>
                    <span className={"text-3xl font-semibold"}>Study Analysis</span>
                </div>
                <div className="h-inherit flex-row flex justify-evenly items-center">
                    <MessageCircleMore className="h-[50px] w-[50px] mr-10"/>
                    <img src={boy} className="h-[100px] w-[100px]" alt={"avatar"}/>
                </div>
            </div>
            <div className={"w-full flex justify-center"}>
                <div className={"w-2/4 p-10 flex-row flex justify-evenly items-center"}>
                    <Zap/>
                    <div
                        className={"w-1/5 pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                        <span className={"font-semibold"}>Streak</span>
                        <span className={"text-3xl font-bold"}>{data.streak}</span>
                    </div>
                    <div
                        className={"w-1/5 pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                        <span className={"font-semibold"}>Peak</span>
                        <span className={"text-3xl font-bold"}>{data.peak}</span>
                    </div>
                    <Award/>
                    <div
                        className={"w-1/5 pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                        <span className={"font-semibold"}>Score</span>
                        <span className={"text-3xl font-bold"}>{data.score}</span>
                    </div>
                    <div
                        className={"w-1/5 pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                        <span className={"font-semibold"}>Highest</span>
                        <span className={"text-3xl font-bold"}>{data.highest}</span>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center w-full"}>
                <div className={"h-[25%] w-[25%] "}>
                    <PieChart
                        data_s={[12, 19, 3, 5, 2, 3]}
                        bds={[
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ]}
                        labels={['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange']}
                        label={'# of Votes'}
                        bgs={[
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)',
                        ]}
                    />
                </div>
            </div>
        </div>

    )
}

export default Report;