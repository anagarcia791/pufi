import { Header, LeftProduct, RightProduct } from "../components";

import umbrellaScene from '../assets/images/umbrella.jpg';
import umbrella from '../assets/images/umbrella-img.png';

import puffScene from '../assets/images/puff.jpg';
import puff from '../assets/images/puff-img.png';

import cartScene from '../assets/images/cart.jpg';
import cart from '../assets/images/cart-img.png';

import pillowScene from '../assets/images/pillow.jpg';
import pillow from '../assets/images/pillow-img.png';

import '../styles/header.css';
import '../styles/product.css';

import { Slider } from "../components/slider/slider";

export const LandingPage = () => {
  const slides = [
    { url: "http://localhost:3000/image-1.jpg", title: "beach" },
    { url: "http://localhost:3000/image-2.jpg", title: "boat" },
    { url: "http://localhost:3000/image-3.jpg", title: "forest" },
  ];

  return (
    <>
      <Header />
      <LeftProduct imgUrl={umbrellaScene} iconUrl={umbrella} product={'RAIN'}/>
      <RightProduct imgUrl={puffScene} iconUrl={puff} product={'PUFF'}/>
      <LeftProduct imgUrl={cartScene} iconUrl={cart} product={'CART'}/>
      <RightProduct imgUrl={pillowScene} iconUrl={pillow} product={'NAP'}/>
      <p>PRUEBAAAAsdfsdfsdfsdfsdfsdf</p>
      <div className="containerStyles">
        <Slider slides={slides} />
      </div>
    </>
  );
};
