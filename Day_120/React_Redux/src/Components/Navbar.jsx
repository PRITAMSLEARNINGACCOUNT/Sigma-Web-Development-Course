import { useSelector } from "react-redux";
const Navbar = () => {
  const Count_Value = useSelector((state) => state.Reducers.value);
  return (
    <nav className="Navbar">
      <ul className="NavUL">
        <li>React Redux</li>
        <li>Count Value - {Count_Value}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
