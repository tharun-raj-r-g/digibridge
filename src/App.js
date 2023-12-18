import SideNav from './components/SideNav';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut} from "@clerk/clerk-react";
import Landing from "./pages/landing";
import Report from "./pages/Report";
import Subject from "./pages/Subject";
import Settings from "./pages/Settings";
import Events from "./pages/Events";
import Notes from "./pages/Notes";
import Mentor from "./pages/Mentor";
import StudentSignUp from "./pages/StudentSignUp";
import StudentSignIn from "./pages/StudentSignIn";

const clerkPubKey = "pk_test_YWRhcHRpbmctbW9uc3Rlci03MS5jbGVyay5hY2NvdW50cy5kZXYk";

function ClerkProviderWithRoutes() {
    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
        >

            <div className="bg-[#eeeeee] h-[98%]">
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route
                        path="/signin/*"
                        element={<StudentSignIn/>}
                    />
                    <Route
                        path="/signup/*"
                        element={<StudentSignUp/>}
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-4 left-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20"}>
                                        <Dashboard/>
                                    </div>

                                </SignedIn>
                                <SignedOut>
                                    <RedirectToSignIn/>
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
                                    <RedirectToSignIn/>
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
                                    <RedirectToSignIn/>
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
                                    <RedirectToSignIn/>
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
                                    <RedirectToSignIn/>
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
                                    <RedirectToSignIn/>
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
                                    <RedirectToSignIn/>
                                </SignedOut>
                            </>
                        }
                    />

                </Routes>
            </div>

        </ClerkProvider>

    );
}

function App() {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes/>
        </BrowserRouter>
    );
}

export default App;
