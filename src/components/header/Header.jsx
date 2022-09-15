import { Link, useNavigate } from "react-router-dom";
import { Slider } from "../slider/slider";
import { NavBar } from "./NavBar";
import '../../styles/slider.css';

export const Header = () => {
  const navigate = useNavigate();

  const slides = [
    { url: "https://raw.githubusercontent.com/anagarcia791/pufi/main/src/assets/images/slide-11.jpg", title: "beach" },
    { url: "https://raw.githubusercontent.com/anagarcia791/pufi/main/src/assets/images/slide-22.jpg", title: "boat" },
    { url: "https://raw.githubusercontent.com/anagarcia791/pufi/main/src/assets/images/slide-33.jpg", title: "forest" },
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
