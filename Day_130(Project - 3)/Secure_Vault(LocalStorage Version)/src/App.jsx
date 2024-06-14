import Navbar from "./Components/Navbar";
import Password_Maneger from "./Components/Password_Maneger";
import Mode from "./Context/Light_Dark_Mode";
import PassContext from "./Context/Passwords";
import { useState, useEffect } from "react";
// import { ToastContainer } from "react-toastify";
function App() {
  const [ToggleMode, setMode] = useState(false);
  const [Passwords, setPasswords] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("Passwords")) {
      const Pass = JSON.parse(localStorage.getItem("Passwords"));
      // console.log(Pass);
      if (Pass !== null) {
        setPasswords(Pass);
      }
    }
  }, []);
  return (
    <>
      <PassContext.Provider value={{ Passwords, setPasswords }}>
        <Mode.Provider value={{ ToggleMode, setMode }}>
          <Navbar />
          {ToggleMode ? (
            <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
              <Password_Maneger />
            </div>
          ) : (
            <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
              <Password_Maneger />
            </div>
          )}
          {/* <div></div> */}
        </Mode.Provider>
      </PassContext.Provider>
    </>
  );
}

export default App;
