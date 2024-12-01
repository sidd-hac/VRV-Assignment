import { cn } from '@/lib/utils';
import { User } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'



const Banner = () => {

    const {theme} = useTheme();

  return (
    <div className={cn(`flex p-5  rounded-xl gap-2 max-sm:gap-1 max-sm:mb-3 max-sm:w-48 w-56` , {'bg-slate-200 text-black' : theme === 'light'} , {'bg-slate-900' : theme === 'dark'})}>
        <div>
            <User className='w-5 h-5' />
        </div>
        <div className='flex justify-center items-center flex-col' >
            <span className=' text-sm font-bold ' >Total Users</span>
            <span className='text-xl'>10345</span>
            <span className='text-sm ' > <span className='text-green-600' >12%</span> more than ...</span>
        </div>

    </div>
  )
}

export default Banner;