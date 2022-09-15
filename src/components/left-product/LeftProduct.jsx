import { Link, useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

export const LeftProduct = ({ imgUrl, iconUrl, product }) => {
  const navigate = useNavigate();

  return (
    <section id={product} className="product">
      <div className="product-img">
        <img src={imgUrl} alt="product-img" />
        <button onClick={() => navigate(`/shop`)}>SHOP</button>
      </div>
      <div className="product-description">
        <img src={iconUrl} alt="product-icon" />
        <h3>Pufi {product}</h3>
        <hr />
        <p>Descripción del producto</p>
        <Link to="/shop">
          <MdArrowForwardIos />
          VER MÁS
        </Link>
      </div>
    </section>
  );
};
