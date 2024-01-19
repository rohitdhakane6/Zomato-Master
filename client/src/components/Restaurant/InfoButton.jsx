import React from "react";

function InfoButton(props) {
  return (
    <>
      <button className="flex items-center border gap-3 border-black px-3 py-2 rounded-lg  hover:bg-gray-100 cursor-pointer">
        {props.children}
      </button>
    </>
  );
}

export default InfoButton;
