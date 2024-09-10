"use client";
import { FormAction } from "@/ServerActions/FormActions";
import { formatDynamicAPIAccesses } from "next/dist/server/app-render/dynamic-rendering";
import { useState } from "react";
export default function Home() {
  const [Name, setName] = useState("");
  return (
    <div>
      <h1 className="text-2xl text-center p-5">
        Demonstrating Server Actions Using Forms
      </h1>
      <form
        className="flex flex-col"
        action={(e) => {
        FormAction(e).then((res,rej) => {
          alert("Name Is Set To - " + res);
        
        });
        }}
        >
        <label htmlFor="Name">Please Enter Your Name :</label>
        <input
          className="bg-black text-white"
          type="text"
          id="Name"
          name="Name"
        />
        <label htmlFor="Title">Please Enter Your Title :</label>
        <input
          className="bg-black text-white"
          type="text"
          id="Title"
          name="Title"
        />
        <label htmlFor="MobileNo">Please Enter Your Phone Number :</label>
        <input
          className="bg-black text-white"
          type="text"
          id="MobileNo"
          name="MobileNo"
        />
        <button type="submit">Submit The Basic Form</button>
      </form>
    </div>
  );
}
