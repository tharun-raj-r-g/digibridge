import SideNav from "./components/SideNav";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/landing";
import Report from "./pages/Report";
import Subject from "./pages/Subject";
import Settings from "./pages/Settings";
import Events from "./pages/Events";
import Notes from "./pages/Notes";
import Mentor from "./pages/Mentor";
import StudentSignUp from "./pages/StudentSignUp";
import StudentSignIn from "./pages/StudentSignIn";
import ThreeDModel from "./pages/ThreeDModel";
import StoryGame from "./pages/StoryGame";
import StoryGame2 from "./pages/StoryGame2";
import InteractiveQuiz from "./pages/InteractiveQuiz";
import Chapter1 from "./pages/Chapter1";
import Chapter2 from "./pages/Chapter2";
// import Inductor from "./pages/Inductor";
import {useEffect} from "react";
import AuthGuard from "./components/AuthGuard";
import Inductor from "./inductor";
import LeaderBrd from "./pages/LeaderBrd";
import SingleModel from "./pages/SingleModel";

function App() {
  useEffect(() => {
    const data = localStorage.getItem("studentData");
    if (data === null) {
      localStorage.setItem("studentData", JSON.stringify([]));
    }
    const notes = localStorage.getItem("notes");
    if (notes === null) {
      localStorage.setItem("notes", JSON.stringify([]));
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin/" element={<StudentSignIn />} />
        <Route path="/signup/" element={<StudentSignUp />} />
        <Route
          path="/dashboard"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Dashboard />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/leaderboard"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <LeaderBrd />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/report"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Report />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/notes"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Notes />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/events"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Events />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/settings"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Settings />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/subject/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Subject />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/mentor"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Mentor />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/threedmodel/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <ThreeDModel />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/storygame/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={""}>
                <StoryGame />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/storygame2/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={""}>
                <StoryGame2 />
              </div>
            </AuthGuard>
          }
        />
        <Route
            path="/interactivequiz/:subject/:chapter"
            element={
              <AuthGuard>
                <div className={"absolute top-4 left-2"}>
                  <SideNav/>
                </div>
                <div className={"p-2 ml-20 mr-20"}>
                  <InteractiveQuiz/>
                </div>
              </AuthGuard>
            }
        />
        <Route
          path="/chapter1/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={""}>
                <Chapter1 />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/chapter2/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={""}>
                <Chapter2 />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/threedmodel/:subject/:chapter"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <ThreeDModel />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/singlemodel/:model"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <SingleModel />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/threedmodel/inductor"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Inductor />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/storygame2/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={""}>
                <StoryGame2 />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/interactivequiz/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <InteractiveQuiz />
              </div>
            </AuthGuard>
          }
        />
        <Route
          path="/chapter1"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={"p-2 ml-20 mr-20"}>
                <Chapter1 />
              </div>
            </AuthGuard>
          }
        />

        <Route
          path="/chapter2/:subject"
          element={
            <AuthGuard>
              <div className={"absolute top-4 left-2"}>
                <SideNav />
              </div>
              <div className={""}>
                <Chapter2 />
              </div>
            </AuthGuard>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
