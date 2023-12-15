import React, {useState} from 'react';
import {Sheet, SheetContent, SheetFooter, SheetHeader, SheetTrigger} from "./ui/sheet.tsx"
import {Button} from "./ui/button.tsx";
import {LogOut, Menu} from "lucide-react";
import {Link, useLocation} from 'react-router-dom';

import logo from "../images/logo-full.png"
import {cn} from "../lib/utils.ts";

const SideNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation().pathname;
    const locations = [
        {name: "Home", url: "/"},
        {name: "Report", url: "/report"},
        {name: "Mentor", url: "/mentor"},
        {name: "Events", url: "/events"},
        {name: "Notes", url: "/notes"},
        {name: "Settings", url: "/settings"},
    ]
    return (
        <Sheet open={isOpen} onOpenChange={() => setIsOpen(!isOpen)}>
            <SheetTrigger>
                <Button>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"} className={"w-fit"}>
                <SheetHeader className={"justify-center items-center"}>
                    <img src={logo} alt={"Logo"} className={"m-3 p-2  w-1/2"}/>
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
                    <Link to={"/"} onClick={() => setIsOpen(!isOpen)}>
                        <div className={"flex flex-row justify-center items-center text-center"}>
                            <LogOut/>
                            Log Out
                        </div>
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>

    );
};

export default SideNav;
