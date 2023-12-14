import React from 'react';
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "./ui/sheet.tsx"
import {Button} from "./ui/button.tsx";
import {Menu} from "lucide-react";

const SideNav = () => {

    return (
        <Sheet>
            <SheetTrigger>
                <Button>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    );
};

export default SideNav;
