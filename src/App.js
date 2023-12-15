import SideNav from './components/SideNav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Report from "./pages/Report";
import Mentor from "./pages/Mentor";
import Notes from "./pages/Notes";
import Events from "./pages/Events";

function App() {
    return (
        <BrowserRouter>
            <div className="bg-[#eeeeee] h-screen">
                <div className={"absolute top-2"}>
                    <SideNav/>
                </div>
                <div className={"p-2 justify-center items-center ml-20 p-10"}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}></Route>
                        <Route path={"/report"} element={<Report/>}></Route>
                        <Route path={"/mentor"} element={<Mentor/>}></Route>
                        <Route path={"/notes"} element={<Notes/>}></Route>
                        <Route path={"/events"} element={<Events/>}></Route>
                        <Route path={"/settings"} element={<Settings/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
