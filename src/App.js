import SideNav from './components/SideNav';
import {BrowserRouter, Route, Routes, useNavigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import {ClerkProvider, RedirectToSignIn, SignedIn, SignedOut, SignIn, SignUp} from "@clerk/clerk-react";
import Landing from "./pages/landing";

// if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
//     throw new Error("Missing Publishable Key")
// }

const clerkPubKey = "pk_test_YWRhcHRpbmctbW9uc3Rlci03MS5jbGVyay5hY2NvdW50cy5kZXYk";

function ClerkProviderWithRoutes() {
    const navigate = useNavigate();
    return (
        <ClerkProvider
            publishableKey={clerkPubKey}
            navigate={(to) => navigate(to)}
        >

            <div className="bg-[#eeeeee] h-[100vh]">
                <Routes>
                    <Route path="/" element={<Landing/>}/>
                    <Route
                        path="/sign-in/*"
                        element={<SignIn routing="path" path="/sign-in"/>}
                    />
                    <Route
                        path="/sign-up/*"
                        element={<SignUp routing="path" path="/sign-up"/>}
                    />
                    <Route
                        path="/dashboard"
                        element={
                            <>
                                <SignedIn>
                                    <div className={"absolute top-2"}>
                                        <SideNav/>
                                    </div>
                                    <div className={"p-2 ml-20 mr-20 h-screen"}>
                                        <Dashboard/>
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

function App() {
    return (
        <BrowserRouter>
            <ClerkProviderWithRoutes/>
        </BrowserRouter>

    );
}

export default App;
