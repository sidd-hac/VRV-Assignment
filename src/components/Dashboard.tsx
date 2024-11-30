"use client"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
// import ToggleMode from "./ToggleMode"
// import WorkspaceDropdown from "./WorkspaceDropdown"
import { Separator } from "./ui/separator"
import ToggleMode from "./Togglemode"
import Hero from "./Hero"
import RightBar from "./Rightbar"
// import EpmtyWorkspace from "./EpmtyWorkspace"
// import EmailWorkspace from "./EmailWorkspace"
// import { Suspense } from "react"



// type Props = {
//     selectedIcon: string | null
// }

const Dashboard = () => {
    // let isClickedHome ;
    // let isClickedInbox ;

    // if(props.selectedIcon === "House"){
    //     isClickedHome = true
    // }
    // if(props.selectedIcon === "Inbox"){
    //     isClickedInbox = true
    // }

    const { theme } = useTheme()

    return (
        <div className="flex flex-col justify-center items-center w-full h-[100%] overflow-y-scroll " >
            <div className={cn("flex justify-between items-center w-full h-fit max-sm:mt-14 sm:mt14 md:mt-14 p-3",
                { 'bg-gray-900': theme === 'dark' }
            )} >
                <h1 className={cn("text-xl font-bold", { 'text-gray-900': theme === 'light' })} >
                    Dashboard
                </h1>


                <div className="flex justify-center items-center gap-4">
                    <ToggleMode />
                </div>
            </div>
            <Separator />

            {/* {isClickedHome && <EpmtyWorkspace/>} */}
            {/* {isClickedInbox && <EmailWorkspace/>} */}
            <div className="flex max-sm:flex-col gap-5 justify-between items-start w-full h-[100vh] ">

                <div className=" sm:w-2/3" >

                    <Hero />
                </div>
                <div className="sm:w-1/3 h-[100vh]">
                    <RightBar />
                </div>
            </div>

        </div>
    )
}

export default Dashboard