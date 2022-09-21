import { Link, useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

export const RightProduct = ({ imgUrl, iconUrl, product, btn }) => {
  const navigate = useNavigate();

  return (
    <section id={product} className="product">
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
      <div className="product-img">
        <img src={imgUrl} alt="product-img" />
        {btn &&<button onClick={() => navigate(`/shop`)}>SHOP</button>}
      </div>
    </section>
  );
};
