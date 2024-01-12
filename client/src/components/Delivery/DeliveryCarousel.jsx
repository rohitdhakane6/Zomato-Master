import React from "react";
import Slider from "react-slick";

// components
import DeliveryCategory from "./DeliveryCategory";
import { NextArrow, PrevArrow } from "../CarouselArrow";

function DeliveryCarousel() {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png",
      title: "Pizza",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/d19a31d42d5913ff129cafd7cec772f81639737697.png",
      title: "Biryani",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png",
      title: "Burger",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png",
      title: "Chicken",
    },
    {
      image:
        "https://b.zmtcdn.com/data/dish_images/c2f22c42f7ba90d81440a88449f4e5891634806087.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/eb2ef145c0fcad44dbb4ed26aad1527d.png",
      title: "Rolls",
    },
    {
      image:
        "https://b.zmtcdn.com/data/homepage_dish_data/4/76d788a2600b609bb0a08443e03df95b.png",
      title: "biryani",
    },
  ];

  const settings = {
    // className: "center",
    // centerMode: true,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow:6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // centerPadding: "10px",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  return (
    <>
      <h1 className="text-2xl text-gray-600 mb-4 font-semibold">
        Inspiration for your first order
      </h1>
      <div className="lg:hidden flex gap-3 lg:gap-0 flex-wrap justify-between">
        {categories.map((food) => (
          <DeliveryCategory {...food} />
        ))}
      </div>
      <div className="hidden lg:block container">
        <Slider {...settings}>
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </Slider>
      </div>
    </>
  );
}

export default DeliveryCarousel;
