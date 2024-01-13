import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../components/Delivery";
import Dining from "../components/Dining And NightLife";

function HomePage() {
  const { type } = useParams();
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
