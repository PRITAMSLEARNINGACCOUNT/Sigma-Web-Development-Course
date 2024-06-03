import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Redux_Store } from "./Redux_Files/Redux_Store.js";
import { Provider } from "react-redux";
ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={Redux_Store}>
    <App />
  </Provider>
);
