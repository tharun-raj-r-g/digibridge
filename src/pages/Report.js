import {Award, MessageCircleMore, Zap} from "lucide-react";
import boy from "../images/boy1.png";
import {useState} from "react";
import PieChart from '../components/PieChart';
import {Button} from "../components/ui/button";
import {cn} from "../lib/utils";


const Report = () => {
    const [selectedSubject, setSelectedSubject] = useState("");
    const [data, setData] = useState({
        streak: 28,
        peak: 48,
        score: 250.5,
        rank: 8,
        subjects: {
            physics: {
                data_s: [15, 12, 11, 10, 5, 3],
                labels: ["Magnetism", "EMF", "Force", "Inertia", "Momentum", "Gravity"],
                score: 150,
                rank: 7
            },
            overall: {
                data_s: [11, 13, 10, 8, 7, 5],
                labels: ["Physics", "Chemistry", "Biology", "Maths", "Social", "English"],
                score: 125,
                rank: 6
            },
            chemistry: {
                data_s: [18, 12, 13, 10, 19, 8],
                labels: ["Chemistry", "Chemistry", "Chemistry", "Chemistry", "Chemistry"],
                score: 135,
                rank: 8
            },
            biology: {
                data_s: [4, 19, 8, 12, 15, 5],
                labels: ["Biology", "Biology", "Biology", "Biology", "Biology"],
                score: 145,
                rank: 5
            },
            english: {
                data_s: [18, 20, 14, 12, 2, 4],
                labels: ["Grammar", "Vocabulary", "Communication", "Reading", "Writing", "Speaking"],
                score: 155,
                rank: 6
            },
            social: {
                data_s: [7, 2, 16, 2, 15, 11],
                labels: ["Culture", "Gender", "Geography", "History", "Functionalism", "Fundamental Theory"],
                score: 80,
                rank: 2
            },
            maths: {
                data_s: [13, 18, 12, 19, 6, 10],
                labels: ["Algebra", "Ratio", "Data Handling", "Fractions", "Decimals", "Mensuration"],
                score: 150,
                rank: 5
            },
        }
    });
    const [label, setLabel] = useState(data.subjects.overall.labels);
    const [dataSet, setDataSet] = useState(data.subjects.overall.data_s);
    const [subjectScore, setSubjectScore] = useState();
    const [subjectRank, setSubjectRank] = useState();
    const subjects = ["Physics", "Chemistry", "Biology", "Maths", "Social", "English"]
    const handleClick = (member) => {
        if (subjects.includes(member) && member !== selectedSubject) {
            setSelectedSubject(member);
            setSubjectScore(data.subjects[member.toLowerCase()].score);
            setLabel(data.subjects[member.toLowerCase()].labels);
            setSubjectRank(data.subjects[member.toLowerCase()].rank);
            setDataSet(data.subjects[member.toLowerCase()].data_s);
        } else {
            setSelectedSubject('');
            setLabel(data.subjects.overall.labels);
            setDataSet(data.subjects.overall.data_s);
        }
    }
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
                        className={"w-1/5 pr-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                        <span className={"font-semibold"}>Consistency</span>
                        <span className={"text-3xl font-bold"}>{data.streak}</span>
                    </div>
                    <div
                        className={"w-1/5 pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                        <span className={"font-semibold"}>Your Best</span>
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
                        <span className={"font-semibold"}>Rank</span>
                        <span className={"text-3xl font-bold"}>{data.rank}</span>
                    </div>
                </div>
            </div>
            <div className={"flex justify-center w-full flex-row"}>
                <div
                    className={"grid grid-cols-2 text-center justify-center align-middle justify-items-center items-center"}>
                    {subjects.map((member, key) =>
                        (
                            <Button className={"font-2xl font-semibold border-2 rounded-2xl shadow-2xl"}
                                    variant={selectedSubject !== member ? "ghost" : ""}
                                    onClick={() => handleClick(member)}>{member}</Button>

                        ))}
                </div>
                <div className={"h-[25%] w-[25%] mr-10 ml-10"}>
                    <PieChart
                        data_s={dataSet}
                        bds={[
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)',
                        ]}
                        labels={label}
                        label={'% Score'}
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
                <div
                    className={cn("flex-col flex justify-evenly items-center", selectedSubject !== "" ? "" : "hidden")}>
                    <Award/>
                    <div
                        className={"pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                        <span className={"font-semibold"}>Score</span>
                        <span className={"text-3xl font-bold"}>{subjectScore}</span>
                    </div>
                    <div
                        className={"pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                        <span className={"font-semibold"}>Rank</span>
                        <span className={"text-3xl font-bold"}>{subjectRank}</span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Report;