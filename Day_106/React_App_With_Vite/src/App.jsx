import "./App.css";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div id="grid">
        <Main
          title="Title Of The First Card"
          description="Description Of The First Card"
        />
        <Main
          title="Title Of The Second Card"
          description="Description Of The Second Card"
        />
        <Main
          title="Title Of The Third Card"
          description="Description Of The Third Card"
        />
        <Main
          title="Title Of The Fourth Card"
          description="Description Of The Fourth Card"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
