import Mode from "../Context/Light_Dark_Mode";
import { useContext } from "react";
import Night from "./Icons/Night.gif";
import Logo from "./Icons/Website_Logo.png";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const mode = useContext(Mode);
  const Redirect = useNavigate();
  const SignUp = () => {
    Redirect("/Signup");
  };
  const Login = () => {
    Redirect("/Login");
  };
  function Logout() {
    localStorage.removeItem("Auth-Token");
    Redirect("/Login");
  }
  return (
    <>
      <nav
        className={
          mode.ToggleMode
            ? "flex justify-around bg-purple-300 h-[50px] items-center"
            : // ? "flex justify-around bg-black text-white h-[50px] items-center"
              "flex justify-around bg-black text-white h-[50px] items-center"
        }
      >
        <div className="flex justify-center items-center">
          <img src={Logo} alt="" className="w-10" />
          <span
            className="text-2xl font-bold
          "
          >
            SecureVault
          </span>
        </div>
        <ul className="flex gap-3 ">
          {localStorage.getItem("Auth-Token") ? (
            <button
              onClick={Logout}
              className="rounded-full border w-20 h-10 border-pink-200 hover:bg-purple-500"
            >
              Logout
            </button>
          ) : (
            <>
              <button
                onClick={SignUp}
                className="rounded-full border w-20 h-10 border-pink-200 hover:bg-purple-500"
              >
                Signup
              </button>
              <button
                onClick={Login}
                className="rounded-full border border-pink-200 w-20 h-10 hover:bg-purple-500"
              >
                Login
              </button>
            </>
          )}

          <div
            className="flex justify-center items-center cursor-pointer"
            onClick={() => {
              mode.setMode(!mode.ToggleMode);
            }}
          >
            <img
              src={Night}
              alt=""
              className={mode.ToggleMode ? "w-10" : "w-10 invert"}
            />
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
