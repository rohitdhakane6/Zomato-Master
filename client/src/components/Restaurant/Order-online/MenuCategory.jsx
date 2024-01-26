import React from "react";
import classnames from "classnames";

function MenuCategory(props) {
  return (
    <div>
      <div
        id={props.name}
        onClick={props.onClickHandler}
        className={classnames("py-2 px-1 cursor-pointer", {
          "text-zomato-400 py-2 px-1 bg-zomato-50 border-r-4 border-zomato-400":
            props.isActive,
        })}
      >
        {props.name} ({props.items.length})
      </div>
    </div>
  );
}

export default MenuCategory;
