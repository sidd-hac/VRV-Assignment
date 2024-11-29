"use client"

import { useTheme } from "next-themes"
import {Sun , Moon} from 'lucide-react'

import { useEffect, useState } from "react"
import { Switch } from "@/components/ui/switch"

const ToggleMode = () => {

    const {theme ,setTheme} = useTheme()
    const [isMounted , setIsMounted] = useState<boolean>(false)

    useEffect(() => {
        setIsMounted(true)
    },[])
    if(!isMounted){
        return null
    }

    const isDark = theme === 'dark'

  return (
        <Switch onClick={() => setTheme(`${isDark ? 'light' : 'dark'}`)}>
          {theme === 'dark'? <Sun /> : <Moon />}
        </Switch>
  )
}

export default ToggleMode





