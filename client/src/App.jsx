import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//HOC
import HomeLayoutHOC from "./HOC/Home.hoc";

//Pages
import HomePage from "./pages/HomePage";
import RestaurantLayoutHOC from "./HOC/Restaurant.hoc";

function App() {
  return (
    <>
      <HomeLayoutHOC  path="/" exact component={HomePage}/>
      <HomeLayoutHOC  path="/:type" exact component={HomePage}/>
      <RestaurantLayoutHOC path='restaurant/:id' exact component={HomePage}/>
    </>
  );
}

export default App;
