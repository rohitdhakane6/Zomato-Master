import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import FloatMenuBtn from "./Order-online/FloatMenuBtn";
import MenuListContainer from "./Order-online/MenuListContainer";

function OrderOnline() {
  const [menu, setMenu] = useState([
    {
      name: "Ice Cream Family Tubs",
      items: [
        "American Nuts Family Tub 280gm",
        "Another Ice Cream Flavor 1",
        "Another Ice Cream Flavor 2",
      ],
    },
    {
      name: "Hocco Ice Cream Shake",
      items: ["Shake Flavor 1", "Shake Flavor 2"],
    },
    {
      name: "Cone & Candies",
      items: ["Cone Flavor 1", "Cone Flavor 2"],
    },
    {
      name: "Hocco Combos",
      items: ["Combo 1", "Combo 2"],
    },
    {
      name: "Biryani & Pulao",
      items: ["Biryani Flavor 1", "Pulao Flavor 1"],
    },
    {
      name: "Pizza",
      items: ["Pizza Flavor 1", "Pizza Flavor 2"],
    },
    {
      name: "Hocco Specialities",
      items: ["Specialty 1", "Specialty 2"],
    },
    {
      name: "Hocco Burger",
      items: ["Burger Flavor 1", "Burger Flavor 2"],
    },
    {
      name: "Parathas",
      items: ["Paratha Flavor 1", "Paratha Flavor 2"],
    },
    {
      name: "Beverages & Dessert",
      items: ["Beverage 1", "Beverage 2"],
    },
    {
      name: "Hocco Ice Cream",
      items: ["Ice Cream Flavor 1", "Ice Cream Flavor 2"],
    },
    {
      name: "Extra",
      items: ["Extra Item 1", "Extra Item 2"],
    },
  ]);
  const [selected, setSelected] = useState("Ice Cream Family Tubs");
  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };
  return (
    <>
      <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-1 border-r  border-green-200 h-screen w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-3 ">
            <h2 className="text-2xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          {/* <section className="flex h-screen  flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList key={index} {...item} />
            ))}
          </section> */}
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;
