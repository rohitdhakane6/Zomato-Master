import React from "react";

//component
import MenuCategory from "./MenuCategory";

function MenuListContainer(props) {
  return (
    <div className="w-full flex flex-col">
      <MenuCategory
        name={props.category}
        items={props.items}
        onClickHandler={props.onClickHandler}
        isActive={props.selected === props.category}
      />
    </div>
  );
}

export default MenuListContainer;
