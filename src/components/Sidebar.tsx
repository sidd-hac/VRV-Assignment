"use client"

// import Onebox from "@/components/Onebox";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import {  useEffect, useState } from "react";
import Navbar from "../components/Navbar"



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
        
            <div className="flex min-h-screen">
                <aside className={cn("border-r-2 border-gray-700 flex flex-col justify-between items-center w-[16%] min-h-screen",
                    { 'bg-gray-900': theme === 'dark' }
                )}>

                    <div className="flex justify-center mt-4">
                        <Image src="/logo.jpeg" alt="logo" width={60} height={50} quality={100} className="rounded-full"/>
                    </div>




                    <div className="flex flex-col justify-start items-start gap-4 mt-6 flex-1">
                        <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "House" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "House" })}
                            onClick={() => handleIconClick("House")}
                        >
                           <span className="text-lg font-bold " > Users</span>
                        </span>
                        <span className={cn(`flex justify-center items-center w-10 h-10 rounded-full ${selectedIcon === "UserSearch" ? "bg-gray-600" : "hover:bg-gray-700"} `, { ' text-white bg-slate-500 ': theme === 'light' && selectedIcon === "UserSearch" })}
                            onClick={() => handleIconClick("UserSearch")}
                        >
                            <span className="text-lg font-bold " > Roles</span>
                        </span>
                       

                    </div>


                    <div className="flex justify-center mb-2">
                        <span className="rounded-full bg-green-800 w-10 h-10 flex justify-center items-center text-white">
                            AS
                        </span>
                    </div>

                </aside >

                <Navbar  />


            </div >

    );
};

export default Sidebar;
