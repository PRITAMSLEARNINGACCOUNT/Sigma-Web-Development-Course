"use client"
import { signIn } from "next-auth/react"
const Login = () => {
  return (
    <div className=" flex flex-col justify-center items-center p-10">
      <h1 className="font-bold text-3xl ">Get Started Donating By Login Into Your Account</h1>
      <div className="flex flex-col gap-3 mt-5">
        <button className="text-xl bg-gray-500 p-5 rounded-md" onClick={() => signIn("github")}>Sign In Using Github</button>
        <button className="text-xl bg-gray-500 p-5 rounded-md" onClick={() => signIn("google")}>Sign In Using Google</button>
      </div>
    </div>
  )
}

export default Login