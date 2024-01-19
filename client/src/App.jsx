import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

//Pages
import HomePage from "./pages/HomePage";
import RestaurantLayoutHOC from "./HOC/Restaurant.hoc";
import Overview from "./components/Restaurant/Overview";

function App() {
  return (
    <>
      <HomeLayoutHOC path="/" exact component={HomePage} />
      <HomeLayoutHOC path="/:type" exact component={HomePage} />
      <RestaurantLayoutHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="/restaurant/:id/order-online"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="restaurant/:id/reviews"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="restaurant/:id/photos"
        exact
        component={Overview}
      />
      <RestaurantLayoutHOC
        path="restaurant/:id/menu"
        exact
        component={Overview}
      />
    </>
  );
}

export default App;
