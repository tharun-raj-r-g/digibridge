import {Award, MessageCircleMore, Zap} from "lucide-react";
import boy from "../images/boy1.png";
import {useState} from "react";
import PieChart from '../components/PieChart';
import {Button} from "../components/ui/button";
import {cn} from "../lib/utils";
import subject from "../json/subject.json"

const Report = () => {

    const [selectedSubject, setSelectedSubject] = useState("");
    const currentUser = JSON.parse(sessionStorage.getItem("current-user"));
    const scores = JSON.parse(localStorage.getItem("scores")).filter(obj => obj.studentId === currentUser.id);
    const totalScores = JSON.parse(localStorage.getItem("scores"))

    if (scores.length===0){
        const chapterNamesBySubject = {};

        for (const sub in subject) {
            // console.log(sub)
            chapterNamesBySubject[sub] = subject[sub].chapters.map(chapter => chapter.chaptername);
        }
        // console.log(chapterNamesBySubject)
    }

    const totalScore = scores.reduce((sum, entry) => sum + entry.score, 0);
    const sumBySubject = scores.reduce((result, entry) => {
        const subject = entry.subject;
        result[subject] = (result[subject] || 0) + entry.score;
        return result;
    }, {});

    const sumBySubjectAndChapter = scores.reduce((result, entry) => {
        const subject = entry.subject;
        const chapter = entry.chapter;

        if (!result[subject]) {
            result[subject] = {};
        }

        result[subject][chapter] = (result[subject][chapter] || 0) + entry.score;

        return result;
    }, {});

    // console.log(sum)
    const [data, setData] = useState(()=>{
        function createLeaderboard(scores) {
            // Create an object to store the total scores for each student
            const totalScores = {};

            // Calculate total scores for each student
            scores.forEach(entry => {
                const studentId = entry.studentId;
                totalScores[studentId] = (totalScores[studentId] || 0) + entry.score;
            });

            // Convert the object into an array of { studentId, totalScore } objects
            const leaderboardData = Object.entries(totalScores).map(([studentId, totalScore]) => ({
                studentId,
                totalScore
            }));

            // Sort the leaderboardData in descending order based on totalScore
            leaderboardData.sort((a, b) => b.totalScore - a.totalScore);

            // Add ranks to the leaderboardData
            leaderboardData.forEach((entry, index) => {
                entry.rank = index + 1;
            });

            // Map the leaderboardData to the required format
            const leaderboard = leaderboardData.map(entry => ({
                name: entry.studentId, // Assuming studentId is the name
                score: entry.totalScore,
                rank: entry.rank
            }));

            return leaderboard;
        }
        const leaderlist  = createLeaderboard(totalScores);
        console.log(leaderlist)
        function findIndexByName(leaderlist, name) {
            if (leaderlist.find(entry => entry.name === name)){
                return leaderlist.find(entry => entry.name === name).rank;
            }
            else{
                return "N/A"
            }
        }
        const index = findIndexByName(leaderlist, currentUser.id);
        const subjects = {};
        for (const subjectKey in subject) {
            subjects[subjectKey] = {
                data_s: subject[subjectKey].chapters.map(chapter => (sumBySubjectAndChapter[subject[subjectKey].name.toLowerCase()] && sumBySubjectAndChapter[subject[subjectKey].name.toLowerCase()][chapter.chaptername] || 0)),
                labels: subject[subjectKey].chapters.map(chapter => chapter.chaptername.slice(0, 10) + "..."),
                score: sumBySubject[subject[subjectKey].name.toLowerCase()] || 0,
                rank: index,
            };
        }
        subjects['overall'] = {
            data_s: Object.values(sumBySubject),
            labels: Object.keys(subjects),
            score: totalScore,
            rank: index,
        };
        const finalData = {
            streak: 1,
            peak: 1,
            score: totalScore,
            rank: index,
            subjects: subjects
        }
        return finalData;
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
            // }
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
                        className={"w-fit pr-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                        <span className={"font-semibold"}>Consistency</span>
                        <span className={"text-3xl font-bold"}>{data.streak}</span>
                    </div>
                    <div
                        className={"w-fit pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
                        <span className={"font-semibold"}>Your Best</span>
                        <span className={"text-3xl font-bold"}>{data.peak}</span>
                    </div>
                    <Award/>
                    <div
                        className={"w-fit pr-5 pl-5 flex flex-col p-3 rounded-2xl bg-black dark:bg-white text-center text-white dark:text-black"}>
                        <span className={"font-semibold"}>Score</span>
                        <span className={"text-3xl font-bold"}>{data.score}</span>
                    </div>
                    <div
                        className={"w-fit pr-5 pl-5 flex flex-col border-2 border-black dark:border-white p-3 rounded-2xl bg-white dark:bg-black text-center text-black dark:text-white"}>
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