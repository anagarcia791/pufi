import { NavLink } from "react-router-dom";
import { TbSofa, TbUmbrella } from 'react-icons/tb';
import { FiShoppingBag } from 'react-icons/fi';
import { BiHotel } from 'react-icons/bi';

export const NavBar = () => {
  return (
    <nav className="navbar">
      <NavLink className="navbar-link border">
        <TbSofa />
        PUFI PUFF
      </NavLink>
      <NavLink className="navbar-link border">
        <TbUmbrella />
        PUFI RAIN
      </NavLink>
      <NavLink className="navbar-link border">
        <FiShoppingBag />
        PUFI CART
      </NavLink>
      <NavLink className="navbar-link">
        <BiHotel />
        PUFI NAP
      </NavLink>
    </nav>
  );
};
