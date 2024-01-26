import React from "react";

//component
import MenuCategory from "./MenuCategory";

function MenuListContainer(props) {
  return (
    <div className="w-full flex flex-col">
      <MenuCategory
        name={props.name}
        items={props.items}
        onClickHandler={props.onClickHandler}
        isActive={props.selected === props.name}
      />
    </div>
  );
}

export default MenuListContainer;
