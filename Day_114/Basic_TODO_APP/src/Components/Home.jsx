import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { Link } from "react-router-dom";
const Home = ({ setProgress }) => {
  const TypingEffect = useRef();
  useEffect(() => {
    for (let index = 10; index <= 100; index += 10) {
      setProgress(index);
    }

    const typed = new Typed(TypingEffect.current, {
      strings: [
        "Boost Your Productivity, Effortlessly.",
        "Organize Your Life, One Task at a Time.",
        "Stay Focused, Get More Done.",
        "Say Goodbye to Procrastination.",
        "Achieve Your Goals, One Step at a Time.",

        // "Expertise On Web Development",
        // "learning Java",
      ],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-black mt-5 gap-3  flex justify-center items-center flex-col h-[80vh]">
      {/* <div className="flex justify-center items-center gap-2 flex-col"> */}
      <h1 className="text-lg md:text-3xl font-bold">
        Welcome To MyTodo - Note Your Desired Todos
      </h1>
      <div className="text-lg">
        <span ref={TypingEffect}></span>
      </div>
      {/* </div> */}
      <button
        type="button"
        onClick={() => {
          localStorage.setItem("Todos", JSON.stringify([]));
        }}
        className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2"
      >
        <Link to="/Todos">Get Started</Link>
      </button>
    </div>
  );
};

export default Home;
