"use client";
import Link from "next/link";
import React from "react";
import {useRouter} from "next/navigation";
import { axios } from "axios";

export default function SignupPage() {
    const [user, setUser] = React.useState({
        email: "",
        password:"",
        username: "",
    })


    const onSignup =  async() => {
     
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center h-screen gap-3">
            <h1 className="text-3xl">Sign up</h1>
            <hr/>
           <label htmlFor="username">username</label>
           <input placeholder="username" className="p-3 rounded-lg text-black" id= "username" type="text" value= {user.username} onChange={(e)=> setUser({...user, username: e.target.value})}/>
               <label htmlFor="email">email</label>
           <input placeholder="email" className="p-3 rounded-lg text-black" id= "email" type="email" value= {user.email} onChange={(e)=> setUser({...user, email: e.target.value})}/>
                  <label htmlFor="password">password</label>
           <input placeholder="password" className="p-3 rounded-lg text-black" id= "password" type= "password" value= {user.password} onChange={(e)=> setUser({...user, password: e.target.value})}/>
              

           <button className="p-2 px-16 bg-red-700 rounded-lg mt-6" onClick={onSignup}> Submit </button>

           <Link className="mt-4" href="/login">Visit Login</Link>
        </div>
        </>
    )
}