import SideNav from './components/SideNav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Report from "./pages/Report";
import Mentor from "./pages/Mentor";
import Notes from "./pages/Notes";
import Events from "./pages/Events";
import Subject from "./pages/Subject";
import ThreeDModel from './pages/ThreeDModel';
import StoryGame from './pages/StoryGame';
import InteractiveQuiz from './pages/InteractiveQuiz';
import Chapter1 from './pages/Chapter1';
function App() {
    return (
        <BrowserRouter>
            <div className="bg-[#eeeeee]">
                <div className={"absolute top-2"}>
                    <SideNav/>
                </div>
                <div className={""}>
                    <Routes>
                        <Route path={"/"} element={<Home/>}></Route>
                        <Route path={"/report"} element={<Report/>}></Route>
                        <Route path={"/mentor"} element={<Mentor/>}></Route>
                        <Route path={"/notes"} element={<Notes/>}></Route>
                        <Route path={"/events"} element={<Events/>}></Route>
                        <Route path={"/settings"} element={<Settings/>}></Route>
                        <Route path={"/subject"} element={<Subject/>}></Route>
                        <Route path={"/threedmodel"} element={<ThreeDModel/>}></Route>
                        <Route path={"/storygame"} element={<StoryGame/>}></Route>
                        <Route path={"/interactivequiz"} element={<InteractiveQuiz/>}></Route>
                        <Route path={"/chapter1"} element={<Chapter1/>}></Route>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
