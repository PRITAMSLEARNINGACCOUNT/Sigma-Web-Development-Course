import Mode from "../Context/Light_Dark_Mode";
import { useContext } from "react";
import Night from "./Icons/Night.gif";
import Logo from "./Icons/Website_Logo.png";
import GithubLogo from "./Icons/Github.png";
function Navbar() {
  const mode = useContext(Mode);

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
          {/* <button className="rounded-full border w-20 h-10 border-pink-200 hover:bg-purple-500">
            Signup
          </button>
          <button className="rounded-full border border-pink-200 w-20 h-10 hover:bg-purple-500">
            Login
          </button> */}
          <a
            className="flex items-center gap-2 rounded-full border border-pink-200 w-35 h-10 hover:bg-purple-500 cursor-pointer"
            target="_blank"
            href="https://github.com/PRITAMSLEARNINGACCOUNT/Sigma-Web-Development-Course/tree/main/Day_130(Project%20-%203)/Password_Maneger"
          >
            <img src={GithubLogo} alt="Logo" className="w-10 h-10 invert" />
            <button type="button" className="w-30 font-bold">
              GitHub
            </button>
          </a>
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
