import Dashboard from "@/components/Dashboard"
import Sidebar from "@/components/Sidebar"




const page = () => {
  return (
    <div className="flex h-[100vh] ">
        <Sidebar/>
        <Dashboard/>

    </div>
  )
}

export default page