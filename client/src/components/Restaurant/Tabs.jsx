import React from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import classnames from "classnames";

function Tab(props) {
  const { id } = useParams();
  return (
    <Link to={`/restaurant/${id}/${props.route}`}>
      <div
        className={classnames("text-gray-500 relative", {
          "text-zomato-400": props.isActive,
        })}
      >
        <h3 className="text-lg md:text-xl">{props.title}</h3>
      </div>
    </Link>
  );
}

export default function Tabs() {
  const location = useLocation();
  const CurentPath = location.pathname;
  const tabs = [
    {
      title: "Overview",
      route: "overview",
      isActive: CurentPath.includes("overview"),
    },
    {
      title: "Order Online",
      route: "order-online",
      isActive: CurentPath.includes("order-online"),
    },
    {
      title: "Reviews",
      route: "reviews",
      isActive: CurentPath.includes("reviews"),
    },
    {
      title: "Photos",
      route: "photos",
      isActive: CurentPath.includes("photos"),
    },
    {
      title: "Menu",
      route: "menu",
      isActive: CurentPath.includes("menu"),
    },
  ];
  return (
    <>
      <div className="flex relative items-center pb-4 gap-8 md:gap-20 overflow-x-scroll lg:overflow-auto border-b-2 ">
        {tabs.map((tab, i) => (
          <Tab {...tab} key={i} />
        ))}
      </div>
    </>
  );
}
