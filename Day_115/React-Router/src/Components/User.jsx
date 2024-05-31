import { useParams } from "react-router-dom";

const User = () => {
  const Params = useParams();
  return <div>The Name Of The User Is {Params.User}</div>;
};

export default User;
