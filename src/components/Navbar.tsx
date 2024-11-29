"use client"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes"
// import ToggleMode from "./ToggleMode"
// import WorkspaceDropdown from "./WorkspaceDropdown"
import { Separator } from "./ui/separator"
import ToggleMode from "./Togglemode"
// import EpmtyWorkspace from "./EpmtyWorkspace"
// import EmailWorkspace from "./EmailWorkspace"
// import { Suspense } from "react"



// type Props = {
//     selectedIcon: string | null
// }

const Onebox = () => {
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
        <div className="flex flex-col justify-center items-center w-full h-full" >
            <div className={cn("flex justify-between items-center w-full h-fit p-3",
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

        </div>
    )
}

export default Onebox