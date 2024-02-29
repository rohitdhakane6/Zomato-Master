import React, { useEffect, useState } from "react";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import FloatMenuBtn from "./Order-online/FloatMenuBtn";
import MenuListContainer from "./Order-online/MenuListContainer";
import FoodList from "./Order-online/FoodList";

//redux
import { useDispatch, useSelector } from "react-redux";
import { getFoodList } from "../../app/store";

function OrderOnline() {
  const [selected, setSelected] = useState("");
  const onClickHandler = (e) => {
    if (e.target.id) {
      setSelected(e.target.id);
    }
    return;
  };
  const dispatch = useDispatch();
  const [menu, setMenu] = useState([]);
  const restaurant = useSelector((state) => state.restaurant.restaurantdata);
  useEffect(() => {
    const fetchData = async () => {
      if (restaurant) {
        try {
          const response = await dispatch(getFoodList(restaurant?.menu));
        
          if (response.payload && response.payload.menus) {
            setMenu(response.payload.menus);
          } else {
            console.error("Data structure is not as expected:", response);
          }
        } catch (error) {
          console.error("Error fetching food list:", error);
        }
      }
    };

    fetchData();
  }, [dispatch, restaurant]);

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
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
  );
}

export default OrderOnline;
