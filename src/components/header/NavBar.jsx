import { NavLink } from "react-router-dom";
import { TbSofa, TbUmbrella } from 'react-icons/tb';
import { FiShoppingBag } from 'react-icons/fi';
import { BiHotel } from 'react-icons/bi';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-link border" to="#PUFF">
        <TbSofa />
        PUFI PUFF
      </NavLink>
      <NavLink className="navbar-link border" to="#RAIN">
        <TbUmbrella />
        PUFI RAIN
      </NavLink>
      <NavLink className="navbar-link border" to="#CART">
        <FiShoppingBag />
        PUFI CART
      </NavLink>
      <NavLink className="navbar-link" to="#NAP">
        <BiHotel />
        PUFI NAP
      </NavLink>
    </nav>
  );
};
