import { useForm } from "react-hook-form";
import Mode from "../Context/Light_Dark_Mode";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
const Login_Page = () => {
  const Theme = useContext(Mode);
  const Navigate = useNavigate();
  const [passRef, setpassRef] = useState("password");
  function ShowPass() {
    if (passRef === "password") {
      setpassRef("text");
    } else {
      setpassRef("password");
    }
  }
  const Submit = async (Data) => {
    try {
      let Result = await fetch(import.meta.env.VITE_USER_LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Data),
      });
      Result = await Result.json();
      console.log(Result)
      if (Result.Token) {
        localStorage.setItem("Auth-Token", Result.Token);
        // console.log("Login Successfull");
        if (Theme.ToggleMode) {
          toast("Logged In Successfully", {
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
          toast("Logged In Successfully", {
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
        Navigate("/");
      } else {
        console.log("Login Unsucessfull");
        if (Theme.ToggleMode) {
          toast("Login Unsucessfull", {
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
          toast("Login Unsuccessfull", {
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
    } catch (error) {
      // console.log(error);
      if (Theme.ToggleMode) {
        toast("Internal Server Error", {
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
        toast("Internal Sever Error", {
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
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <ToastContainer />
      <div className="main flex flex-col items-center w-full gap-10 min-h-[94.6vh] ">
        {Theme.ToggleMode ? (
          <div className="text-3xl text-black text-center mt-7 flex gap-5 flex-col">
            <h1 className="font-bold text-3xl text-purple-400">
              Welcome To Secure
              <span className="text-purple-300">
                {" "}
                Store Your Passwords Securely
              </span>
            </h1>
            <h3>Please Login To Proceed</h3>
          </div>
        ) : (
          <div className="text-3xl text-purple-400 text-center mt-7 flex gap-5 flex-col">
            <h1 className="font-bold text-3xl text-purple-400 md:hidden">
              Welcome To Secure Vault
              <span className="text-purple-300">
                {" "}
                Store Your Passwords Securely
              </span>
            </h1>
            <h1 className="font-bold text-3xl text-purple-400 hidden md:block">
              Welcome To Secure Vault -
              <span className="text-purple-300">
                {" "}
                Store Your Passwords Securely
              </span>
            </h1>
            <h3>Please Login To Proceed</h3>
          </div>
        )}
        <div className="flex justify-center items-center min-h-[65vh]">
          <form
            className="flex flex-col md:gap-10 gap-5"
            onSubmit={handleSubmit(Submit)}
          >
            <div className="w-full flex items-center justify-center">
              <input
                type="text"
                className="rounded-full border border-purple-500 md:w-[20vw] p-5 "
                placeholder="Enter The Username"
                {...register("Username", {
                  required: { value: true, message: "Username Required" },
                })}
              />
              {errors.Username
                ? Theme.ToggleMode
                  ? toast(errors.Username.message, {
                      position: "top-right",
                      autoClose: 5000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "light",
                    })
                  : toast(errors.Username.message, {
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
            <div className="w-[70vw] flex flex-col items-center justify-center gap-10">
              <div className="flex justify-start items-center relative">
                <input
                  type={passRef}
                  name="Password"
                  className="rounded-full border border-pink-500 md:w-[20vw] p-5"
                  placeholder="Enter The Password"
                  {...register("Password", {
                    required: {
                      value: true,
                      message: "Password Field Required",
                    },
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
                  className="absolute right-3 top-[17px] cursor-pointer"
                  onClick={ShowPass}
                >
                  <lord-icon
                    src="https://cdn.lordicon.com/kkiecexg.json"
                    trigger="hover"
                  ></lord-icon>
                </div>
              </div>
              <button
                className="rounded-full p-5 md:w-[5vw]  bg-blue-100 flex justify-center items-center text-xl"
                type="submit"
              >
                LogIn
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login_Page;
