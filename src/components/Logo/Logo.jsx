import { Link } from "react-router-dom";
import LogoImg from "../../assets/logo.png";

const Logo = () => {
  return (
    <Link to="/" className="mr-4 text-2xl font-bold cursor-pointer py-1.5">
      <img src={LogoImg} className="w-8 inline-block -mt-1 mr-2" alt="" />
      <span className="text-light-blue-500">library</span>
      <span className="text-light-blue-900">Log</span>
    </Link>
  );
};

export default Logo;
