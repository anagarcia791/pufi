import { Link, useNavigate } from "react-router-dom";
import { NavBar } from "./NavBar";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="header">
      <div className="header-first-section">
        <h1>Pufi</h1>
        <NavBar />
        <div className="header-first-section-account">
          <select name="options" id="options">
            <option value="mi cuenta">MI CUENTA</option>
          </select>
          <Link>MI COMPRA</Link>
        </div>
      </div>
      <div className="header-second-section">
        <h2>ESTÁR CÓMODO,<br /> NUNCA FUE TAN FÁCIL.</h2>
        <button onClick={() => navigate(`/shop`)}>SHOP</button>
      </div>
    </section>
  );
};
