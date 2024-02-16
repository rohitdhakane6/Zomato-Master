import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Delivery from "../components/Delivery";
import Dining from "../components/Dining And NightLife";
import { fetchRestaurants } from "../app/store";
import { useDispatch } from "react-redux";

function HomePage() {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRestaurants());
  }, []);
  return (
    <>
      <div className="my-5">
        {type === "delivery" && <Delivery />}
        {(type === "dining" || type === "night") && <Dining />}
        {/* {type === "night" && <NightLife />}
        {type === "nutri" && <Nutrition />} */}
      </div>
    </>
  );
}

export default HomePage;
