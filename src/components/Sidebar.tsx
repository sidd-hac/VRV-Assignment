"use client"

// import Onebox from "@/components/Onebox";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

import { Notebook, User } from "lucide-react";
// import Dashboard from "../components/Dashboard"



const Sidebar = () => {


    const { theme } = useTheme()
    const searchParams = useSearchParams();

    useEffect(() => {
        // This check ensures that the code only runs in the browser

        // Get the token from the URL search params
        const token = searchParams.get('token');
        // Check if the token exists and store it in localStorage
        if (token) {
            localStorage.setItem('token', token);
            console.log('Token saved to localStorage:', token);
        } else {
            console.log('No token found in URL');
        }

    }, [searchParams]);


    const [selectedIcon, setSelectedIcon] = useState<string | null>("House");

    const handleIconClick = (iconName: string) => {
        setSelectedIcon(iconName);
    };



    return (

        <div className="flex h-[100vh] ">
            <aside className={cn("border-r-2 border-gray-700 flex flex-col justify-between items-center h-[100%] sm:px-5 ",
                { 'bg-gray-900': theme === 'dark' }
            )}>

                <div className="flex justify-center mt-4">
                    <Image src="/logo.jpeg" alt="logo" width={60} height={50} quality={100} className="rounded-full" />
                </div>

                <div className="flex flex-col justify-start items-start gap-4 mt-6 flex-1 w-full">
                    <span className={cn(`flex justify-center items-center w-full h-10 rounded-md  gap-2 ${selectedIcon === "Users" ? "bg-gray-600 text-white" : "hover:bg-gray-500 "} `, { ' text-white bg-slate-600 ': theme === 'light' && selectedIcon === "Users" })}
                        onClick={() => handleIconClick("Users")}
                    >
                        <User className="w-5 h-5" />
                        <span className="text-lg font-bold max-sm:hidden" > Users</span>
                    </span>
                    <span className={cn(`flex justify-center items-center w-full h-10 rounded-md gap-2 ${selectedIcon === "Roles" ? "bg-gray-600 text-white" : "hover:bg-gray-500"} `, { ' text-white bg-slate-600 ': theme === 'light' && selectedIcon === "Roles" })}
                        onClick={() => handleIconClick("Roles")}
                    >
                        <Notebook className="w-5 h-5" />
                        <span className="text-lg font-bold max-sm:hidden" > Roles</span>
                    </span>


                </div>


                <div className="flex justify-center mb-2 items-center gap-3">
                    <span className="rounded-full bg-green-800 w-10 h-10 flex justify-center items-center text-white">
                        AS
                    </span>
                    <span className="justify-center items-center font-bold max-sm:hidden">Admin</span>
                </div>

            </aside >


        </div >

    );
};

export default Sidebar;
