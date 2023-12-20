import React, {useState} from 'react';
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger} from "./ui/sheet.tsx"
import {Button} from "./ui/button.tsx";
import {LogOut, Menu} from "lucide-react";
import {Link, useNavigate} from 'react-router-dom';

import logo from "../images/logo-full.png"
import {cn} from "../lib/utils.ts";

const SideNav = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const location = "/";
    const locations = [
        {name: "Dashboard", url: "/dashboard"},
        {name: "My Report", url: "/report"},
        {name: "Leaderboard", url: "/leaderboard"},
        {name: "Mentor", url: "/mentor"},
        {name: "Events", url: "/events"},
        {name: "Notes", url: "/notes"},
        {name: "Settings", url: "/settings"},
    ]
    const handleOnLogOut = () => {
        sessionStorage.removeItem("current-user");
        navigate("/");
    }
    return (
        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <SheetTrigger>
                <Button variant={"ghost"}>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className={"w-fit"}>
                <SheetHeader className={"justify-center items-center"}>
                    <Link to={"/dashboard"}>
                        <img src={logo} alt={"Logo"} className={"mt-3 w-3/4"}/>
                    </Link>
                </SheetHeader>
                <div className={"h-[80%] flex flex-col align-middle justify-center items-center"}>
                    {locations.map((item) => (
                        <Link to={item.url} onClick={() => setIsOpen(!isOpen)}>
                            <div
                                className={cn("lg:m-3 text-2xl p-2 pr-4 pl-4 rounded-2xl ", location === item.url ? "bg-[#93e3d8]" : "hover:bg-blue-100")}>
                                {item.name}
                            </div>
                        </Link>
                    ))}


                </div>
                <SheetFooter className={"justify-center items-center text-center"}>
                    <Button variant={"ghost"} onClick={handleOnLogOut}>
                        <div className={"flex flex-row items-center text-center"}>
                            <LogOut className={"mr-4"}/>
                            <span> Log Out</span>
                        </div>
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    );
};

export default SideNav;
