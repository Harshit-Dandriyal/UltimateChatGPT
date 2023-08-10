"use client"

import axios from "axios"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { toast } from "react-hot-toast"

export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const onLogout = async () => {
        try {
              const response = await axios.get('/api/users/logout')
              toast.success('Logout successful')
              router.push('/login')
        } catch (error: any) {
             console.log(error.message)
             toast.error(error.message)
        }
      

    }
    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);

        setData(res.data.data._id)
    }
    return (
        <div className="flex flex-col justify-center items-center h-screen py-2"> 
        <h1>Profile</h1>
        <h1>Profile Page</h1>
        <h2 className="p-3 rounded bg-green-800">{data === 'nothing'? "Nothing" : <Link href={`/profile/${data}`}>
        {data}
        
        </Link>}</h2>
        <hr/>
        <button onClick={onLogout} className="bg-blue-500 mt-4 text-white font-bold py-2 px-4 rounded">Logout</button>
                <button onClick={getUserDetails} className="bg-green-500 mt-4 text-white font-bold py-2 px-4 rounded">GetUserDetail</button>

        </div>
    )
}