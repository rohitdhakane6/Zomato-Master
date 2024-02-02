import React, { useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

import FloatMenuBtn from "./Order-online/FloatMenuBtn";
import MenuListContainer from "./Order-online/MenuListContainer";
import FoodList from "./Order-online/FoodList";
function OrderOnline() {
  const [menu, setMenu] = useState([
    {
      name: "Ice Cream Family Tubs",
      items: [
        {
          name: "American Nuts Family Tub 280gm",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4,
          price: 4,
          description:
            "Delicious American Nuts ice cream in a family-sized tub.",
        },
      ],
    },
    {
      name: "Hocco Ice Cream Shake",
      items: [
        {
          name: "Chocolate Shake",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.5,
          price: 5,
          description: "Creamy chocolate shake.",
        },
        {
          name: "Vanilla Shake",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.2,
          price: 4.5,
          description: "Classic vanilla shake.",
        },
      ],
    },
    {
      name: "Cone & Candies",
      items: [
        {
          name: "Caramel Cone",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.3,
          price: 3.5,
          description: "Crunchy caramel-flavored cone.",
        },
        {
          name: "Strawberry Candies",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.0,
          price: 2.5,
          description: "Sweet strawberry-flavored candies.",
        },
      ],
    },
    // ... Repeat the process for other menu items

    {
      name: "Hocco Ice Cream",
      items: [
        {
          name: "Mint Chocolate Chip",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: true,
          rating: 4.4,
          price: 4.75,
          description: "Refreshing mint with chocolate chips.",
        },
        {
          name: "Cookies and Cream",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.6,
          price: 5.25,
          description: "Classic cookies and cream flavor.",
        },
      ],
    },
    {
      name: "Extra",
      items: [
        {
          name: "Extra Item 1",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.1,
          price: 3.75,
          description: "An extra special item.",
        },
        {
          name: "Extra Item 2",
          image:
            "https://b.zmtcdn.com/data/dish_photos/296/b191c45e0d77de151c081d8aca4dd296.jpeg",
          isAddedToCart: false,
          rating: 4.7,
          price: 4.25,
          description: "Another extra special item.",
        },
      ],
    },
  ]);

  // Remember to replace the placeholder image URLs and descriptions with actual values as needed.

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
        <aside className="hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
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
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList key={index} {...item} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

export default OrderOnline;
