"use client"

import Dashboard from "@/components/Dashboard"
import Sidebar from "@/components/Sidebar"
import { useEffect } from "react"




const Page = () => {

  useEffect(() => {
       
    const user = JSON.parse(localStorage.getItem("user") || "{ }");

    if(!user) {
      window.location.href = '/login';
      return;
    }

    if(user.role !== 'admin'){
        window.location.href = '/';
      return;
    }

  }, [])


  return (
    <div className="flex h-screen overflow-hidden">
        <Sidebar/>
        <Dashboard/>

    </div>
  )
}

export default Page