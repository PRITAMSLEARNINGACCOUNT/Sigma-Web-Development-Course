import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
// import Navbar from "./Components/Navbar";
import User from "./Components/User";
import Navbar_2 from "./Components/Navbar_2";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        {/* <Navbar /> */}
        <Navbar_2 />
        <Home />
      </>
    ),
  },
  {
    path: "/About",
    element: (
      <>
        {/* <Navbar /> */}
        <Navbar_2 />
        <About />
      </>
    ),
  },
  {
    path: "/UserInfo/:User",
    element: (
      <>
        {/* <Navbar /> */}
        <Navbar_2 />
        <User />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
