import "./App.css";
import LoginForm from "./Components/Login_Form";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <LoginForm />
      </div>
    </>
  );
}

export default App;
