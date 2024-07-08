import "./App.css";
import LoginPage from "./Components/Login_Page";
import Navbar from "./Components/Navbar";
import Password_Maneger from "./Components/Password_Maneger";
import SignupPage from "./Components/Signup_Page";
import Mode from "./Context/Light_Dark_Mode";
import PassContext from "./Context/Passwords";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const [ToggleMode, setMode] = useState(false);
  const [Passwords, setPasswords] = useState([]);
  return (
    <>
      <BrowserRouter>
        <PassContext.Provider value={{ Passwords, setPasswords }}>
          <Mode.Provider value={{ ToggleMode, setMode }}>
            <Navbar />
            <Routes>
              <Route
                path="/"
                element={
                  ToggleMode ? (
                    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                      <Password_Maneger />
                    </div>
                  ) : (
                    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                      <Password_Maneger />
                    </div>
                  )
                }
              />
              <Route
                path="/Login"
                element={
                  ToggleMode ? (
                    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                      <LoginPage />
                    </div>
                  ) : (
                    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                      <LoginPage />
                    </div>
                  )
                }
              />
              <Route
                path="/Signup"
                element={
                  ToggleMode ? (
                    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
                      <SignupPage />
                    </div>
                  ) : (
                    <div className="[background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
                      <SignupPage />
                    </div>
                  )
                }
              />

            </Routes>
          </Mode.Provider>
        </PassContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
