import logo from "../images/logo-full.png";
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";

const Landing = () => {
    const navigate = useNavigate();
    return (
        <div className={"h-full flex flex-col justify-center items-center"}>
            <div className={"h-[60%] flex-col flex justify-evenly items-center"}>
                <img src={logo} alt={"Logo"}/>
                <Button
                    className={"bg-indigo-950 text-white rounded-2xl p-3 hover:bg-indigo-900 hover:scale-150 ease-in duration-200 transition-all"}
                    onClick={() => navigate("/sign-in")}>Start Learning</Button>

            </div>

        </div>
    )
}
export default Landing