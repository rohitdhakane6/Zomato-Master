import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.hoc";
import Checkoutlayouthoc from "./HOC/Checkout.hoc";
//Pages
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import Redirect from "./pages/Restaurant/Redirect";
import GoogleAuth from "./pages/GoogleAuth.jsx";
//Components
import Overview from "./components/Restaurant/Overview";
import Menu from "./components/Restaurant/Menu";
import OrderOnline from "./components/Restaurant/OrderOnline";
import Reviews from "./components/Restaurant/Reviews/Reviews";
import Photos from "./components/Restaurant/Photos/Photos";
import { useDispatch } from "react-redux";
import { getSelf } from "./app/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSelf());
  }, [localStorage]);
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/delivery" />} />
        <Route path="/google" element={<GoogleAuth />} />
      </Routes>

      <HomeLayoutHOC path="/:type" exact component={HomePage} />
      <RestaurantLayoutHOC path="/restaurant/:id" exact component={Redirect} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <RestaurantLayoutHOC path="restaurant/:id/menu" exact component={Menu} />
      <Checkoutlayouthoc
        path="/checkout/orders"
        exact
        component={CheckoutPage}
      />
    </>
  );
}

export default App;
