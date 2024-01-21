import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";
import RestaurantLayoutHOC from "./HOC/Restaurant.hoc"; 


//Pages
import HomePage from "./pages/HomePage";

//Components
import Overview from "./components/Restaurant/Overview";
import Menu from "./components/Restaurant/Menu";

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
        component={Menu}
      />
    </>
  );
}

export default App;
