import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import safe from "../../assets/images/safe.png";

export const Footer = () => {
  return (
    <>
      <footer className="footer border-top">
        <div className="footer-item margin-right">
          <p className="logo">Pufi</p>
        </div>
        <div className="footer-item border-right">
          <a href="#RAIN">PUFI RAIN</a>
          <a href="#PUFF">PUFI PUFF</a>
          <a href="#CART">PUFI CART</a>
          <a href="#NAP">PUFI NAP</a>
        </div>
        <div className="footer-item border-right">
          <p className="pointer">CONTACTO</p>
          <p className="pointer">AYUDA</p>
          <p className="pointer">CÓMO COMPRAR</p>
          <p className="pointer">CONDICIONES</p>
        </div>
        <div className="footer-item border-right">
          <p>COMPRA 100% SEGURA</p>
          <div className="safe">
            <img src={safe} alt="safe-icon" />
            <p>COMPRÁ CON LA GARANTÍA DE PUFI</p>
          </div>
        </div>
        <div className="footer-item">
          <p>SÍGUENOS EN:</p>
          <div>
            <a href="https://es-la.facebook.com/">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/?lang=es">
              <FaTwitter />
            </a>
            <a href="https://www.instagram.com/">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
      <hr className="shadow" />
      <p className="rights-reserved">
        PUFI Copyright 2022 - Todos los derechos reservados
      </p>
    </>
  );
};
