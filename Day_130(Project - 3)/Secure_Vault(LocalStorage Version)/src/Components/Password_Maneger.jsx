import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
// import React from "react";
import { v4 as uuidv4 } from "uuid";
import PassContext from "../Context/Passwords";
import Mode from "../Context/Light_Dark_Mode";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import Passwords_Table from "./Passwords_Table";
function Password_Maneger() {
  const [passRef, setpassRef] = useState("password");
  const passcontext = useContext(PassContext);
  const Theme = useContext(Mode);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();
  async function Submit(Data) {
    const newData = { ...Data, id: uuidv4() };
    // console.log(newData);
    await passcontext.setPasswords([...passcontext.Passwords, newData]);
    await localStorage.setItem(
      "Passwords",
      JSON.stringify([...passcontext.Passwords, newData])
    );

    if (Theme.ToggleMode) {
      toast("Password Added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast("Password Added Successfully", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }
  function ShowPass() {
    if (passRef === "password") {
      setpassRef("text");
    } else {
      setpassRef("password");
    }
    // console.log(passRef.current);
    // if (passRef.current.type === "password") {
    //   passRef.current.type = "text";
    // } else {
    //   passRef.current.type = "password";
    // }
  }

  return (
    <>
      {/* Same as */}
      <ToastContainer />
      <div className="main flex flex-col items-center w-full gap-10 py-10 min-h-[94.6vh] ">
        <h1 className="text-center font-bold text-3xl text-purple-400">
          Welcome To Secure Vault
          <span className="text-purple-300">
            
             {" "}- Store Your Passwords Securely
          </span>
        </h1>
        {/* <h3 className="text-xl text-center text-purple-400">
          Store Your Passwords Seamlessly
        </h3> */}
        <form
          className="flex flex-col md:gap-10 gap-5"
          onSubmit={handleSubmit(Submit)}
        >
          <div className="w-full flex justify-center">
            <input
              type="text"
              className="rounded-full border border-purple-500 w-[60vw] p-5"
              placeholder="Enter The URL"
              {...register("Website", {
                required: { value: true, message: "URL Field Required" },
              })}
            />
            {errors.Website
              ? Theme.ToggleMode
                ? toast(errors.Website.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
                : toast(errors.Website.message, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  })
              : ""}
          </div>
          <div className="w-[70vw] flex flex-col items-center md:flex-row  justify-center gap-3">
            <input
              type="text"
              name="Username"
              className="rounded-full border border-pink-500 w-[50vw] p-5"
              placeholder="Enter The Username"
              {...register("Username", {
                required: { value: true, message: "Username Field Required" },
              })}
            />
            {errors.Username
              ? Theme.ToggleMode
                ? toast(errors.Username.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                  })
                : toast(errors.Username.message, {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                  })
              : ""}
            <div className="flex justify-start items-center relative">
              <input
                type={passRef}
                name="Password"
                className="rounded-full border border-pink-500 md:w-[20vw] p-5"
                placeholder="Enter The Password"
                {...register("Password", {
                  required: { value: true, message: "Password Field Required" },
                })}
              />
              {errors.Password
                ? Theme.ToggleMode
                  ? toast(errors.Password.message, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    })
                  : toast(errors.Password.message, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "dark",
                    })
                : ""}
              <div
                className="absolute right-3 top-5 cursor-pointer"
                onClick={ShowPass}
              >
                <lord-icon
                  src="https://cdn.lordicon.com/kkiecexg.json"
                  trigger="hover"
                ></lord-icon>
              </div>
            </div>
            <button
              className="rounded-full p-5 bg-blue-100 flex justify-center items-center"
              type="submit"
              // onClick={(event) => {}}
            >
              <lord-icon
                src="https://cdn.lordicon.com/rcgrnzji.json"
                trigger="hover"
                stroke="bold"
              ></lord-icon>
            </button>
          </div>
        </form>

        <Passwords_Table setValue={setValue} />
      </div>
    </>
  );
}

export default Password_Maneger;
