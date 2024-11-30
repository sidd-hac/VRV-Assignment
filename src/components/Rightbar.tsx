// import { Mail, MailOpen } from "lucide-react"
// import { Separator } from "./ui/separator"
// import { useTheme } from "next-themes"
// import { cn } from "@/lib/utils"
import { CirclePlay, NotepadText } from "lucide-react"
import { Button } from "./ui/button"
import { cn } from "@/lib/utils"
import { useTheme } from "next-themes";





const RightBar = () => {

    const { theme } = useTheme();

    return (
        <section className="h-[100%]">
            <div className=" flex flex-col p-5 max-sm:p-2 space-y-4 max-sm:w-full">
                <div className={cn(`flex flex-col justify-start items-start bg-slate-900 gap-4 p-5 rounded-xl max-sm:w-full`, {'bg-slate-200' : theme === 'light'})}>
                    <span className="text-sm " >🔥 Available Now</span>
                    <h3 className="text-lg font-bold" >
                        How to use the new version of the admin dashboard?
                    </h3>
                    <span className="text-xs">Takes 4 minutes to learn</span>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <Button className="flex gap-1">
                        <CirclePlay  />
                        watch
                    </Button>
                </div>
                <div className={cn(`flex flex-col justify-start items-start bg-slate-900 gap-4 p-5 rounded-xl max-sm:w-full`, {'bg-slate-200' : theme === 'light'})}>
                    <span className="text-sm " > 🚀 Coming Soon</span>
                    <h3 className="text-lg font-bold" >
                    New server actions are available, partial pre-rendering is coming
                    up!
                    </h3>
                    <span className="text-xs">Boost your productivity</span>
                    <p className="text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reprehenderit eius libero perspiciatis recusandae possimus.
                    </p>
                    <Button className="flex gap-1">
                    <NotepadText />
                        Learn
                    </Button>
                </div>

            </div>
        </section>
    )
}

export default RightBar