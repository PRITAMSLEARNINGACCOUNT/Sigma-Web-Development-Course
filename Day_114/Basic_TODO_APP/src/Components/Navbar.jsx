import TodoIcon from "../Icons/Todo_Icon.jpg";
import GithubLogo from "../Icons/Github.png";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  let Navigate = useNavigate();
  function Redirect() {
    Navigate("/");
  }
  return (
    <nav className="flex md:w-[50%] w-[98%] md:mx-auto  rounded-full p-5 justify-between sticky top-3 right-1 left-1 custom-bg h-14 items-center">
      <div
        onClick={Redirect}
        className="flex justify-center items-center gap-2 cursor-pointer"
      >
        <img className="w-10 h-10 rounded-full" src={TodoIcon} alt="TodoIcon" />
        <h1 className="text-lg font-bold">MyTodo</h1>
      </div>
      <a
        className="flex items-center gap-2 rounded-full border border-pink-200 w-35 h-10 hover:bg-purple-500 cursor-pointer"
        target="_blank"
        href="https://github.com/PRITAMSLEARNINGACCOUNT/Basic-Todo-App"
      >
        <img src={GithubLogo} alt="Logo" className="w-10 h-10 " />
        <button type="button" className="w-30 font-bold">
          GitHub
        </button>
      </a>
    </nav>
  );
};

export default Navbar;
