import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage, ShopPage } from "../pages";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}/>
        <Route path="shop" element={<ShopPage />}/>
        <Route path="/*" />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
