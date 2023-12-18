import SideNav from './components/SideNav';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp} from "@clerk/clerk-react";
import Landing from "./pages/landing";
import Report from "./pages/Report";
import Subject from "./pages/Subject";
import Settings from "./pages/Settings";
import Events from "./pages/Events";
import Notes from "./pages/Notes";
import Mentor from "./pages/Mentor";

const clerkPubKey = "pk_test_YWRhcHRpbmctbW9uc3Rlci03MS5jbGVyay5hY2NvdW50cy5kZXYk";

function ClerkProviderWithRoutes() {
    const navigate = useNavigate();
    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to) => navigate(to)}
        >

            <div className="bg-[#eeeeee] h-[98%]">
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route
                        path="/sign-in/*"
                        element={<SignIn routing="path" path="/sign-in" afterSignInUrl={"/dashboard"}/>}
                    />
                    <Route
                        path="/sign-up/*"
                        element={<SignUp routing="path" path="/sign-up" afterSignUpUrl={"/dashboard"}/>}
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Dashboard/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/report"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Report/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/notes"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Notes/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/events"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Events/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/settings"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Settings/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/subject"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Subject/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                    <Route
                        path="/mentor"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Mentor/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn afterSignInUrl={"/dashboard"} afterSignUpUrl={"/signup"}/>
                                </SignedOut>
                            </>
                        }
                    />
                </Routes>
            </div>
            {/*<Route path={"/"} element={<Login/>}></Route>*/}
            {/*<Route path={"dashboard"} element={<Dashboard/>}></Route>*/}
            {/*<Route path={"report"} element={<Report/>}></Route>*/}
            {/*<Route path={"mentor"} element={<Mentor/>}></Route>*/}
            {/*<Route path={"notes"} element={<Notes/>}></Route>*/}
            {/*<Route path={"events"} element={<Events/>}></Route>*/}
            {/*<Route path={"settings"} element={<Settings/>}></Route>*/}
            {/*<Route path={"subject"} element={<Subject/>}></Route>*/}
        </ClerkProvider>
    );
}

import ThreeDModel from './pages/ThreeDModel';
import StoryGame from './pages/StoryGame';
import InteractiveQuiz from './pages/InteractiveQuiz';
import Chapter1 from './pages/Chapter1';
function App() {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes/>
        </BrowserRouter>

    );
}

export default App;
