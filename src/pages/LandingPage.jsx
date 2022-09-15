import {
  Collage,
  Footer,
  Header,
  LeftProduct,
  Newsletter,
  RightProduct,
} from "../components";

import umbrellaScene from "../assets/images/umbrella.jpg";
import umbrella from "../assets/images/umbrella-img.png";

import puffScene from "../assets/images/puff.jpg";
import puff from "../assets/images/puff-img.png";

import cartScene from "../assets/images/cart.jpg";
import cart from "../assets/images/cart-img.png";

import pillowScene from "../assets/images/pillow.jpg";
import pillow from "../assets/images/pillow-img.png";

import "../styles/header.css";
import "../styles/slider.css";
import "../styles/product.css";
import "../styles/collage.css";
import "../styles/newsletter.css";
import "../styles/footer.css";

export const LandingPage = () => {
  return (
    <>
      <Header />
      <LeftProduct imgUrl={umbrellaScene} iconUrl={umbrella} product={"RAIN"} />
      <RightProduct imgUrl={puffScene} iconUrl={puff} product={"PUFF"} />
      <LeftProduct imgUrl={cartScene} iconUrl={cart} product={"CART"} />
      <RightProduct imgUrl={pillowScene} iconUrl={pillow} product={"NAP"} />
      <Collage />
      <Newsletter />
      <Footer />
    </>
  );
};
