import logo from "../images/logo-full.png";
import {Button} from "../components/ui/button.tsx";
import {useNavigate} from "react-router-dom";
import {SignedIn, SignedOut} from "@clerk/clerk-react";
import {useEffect, useState} from "react";

const Landing = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnlineStatus = () => setIsOnline(true);
        const handleOfflineStatus = () => setIsOnline(false);

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOfflineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOfflineStatus);
        };
    }, []);
    const navigate = useNavigate();
    return (
        <div className={"h-screen flex flex-col justify-center items-center"}>
            <div className={"h-[60%] flex-col flex justify-evenly items-center"}>
                <img src={logo} alt={"Logo"}/>
                <Button
                    variant={"default"}
                    className={" hover:scale-150 ease-in duration-200 transition-all"}
                    onClick={() => navigate("/signin")}>
                    Start Learning
                </Button>


            </div>

        </div>
    )
}
export default Landing