import { TbSofa, TbUmbrella } from "react-icons/tb";
import { FiShoppingBag } from "react-icons/fi";
import { BiHotel } from "react-icons/bi";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <a className="navbar-link border" href="#PUFF">
        <TbSofa />
        PUFI PUFF
      </a>
      <a className="navbar-link border" href="#RAIN">
        <TbUmbrella />
        PUFI RAIN
      </a>
      <a className="navbar-link border" href="#CART">
        <FiShoppingBag />
        PUFI CART
      </a>
      <a className="navbar-link" href="#NAP">
        <BiHotel />
        PUFI NAP
      </a>
    </nav>
  );
};
