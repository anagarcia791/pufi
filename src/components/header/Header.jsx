import { Link, useNavigate } from "react-router-dom";
import { Slider } from "../slider/slider";
import { NavBar } from "./NavBar";
import '../../styles/slider.css';

export const Header = () => {
  const navigate = useNavigate();

  const slides = [
    { url: "src/assets/images/slide-1.jpg", title: "beach" },
    { url: "src/assets/images/slide-2.jpg", title: "boat" },
    { url: "src/assets/images/slide-3.jpg", title: "forest" },
  ];

  return (
    <>
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
      <div className="containerStyles">
        <Slider slides={slides} />
      </div>
    </>
  );
};
