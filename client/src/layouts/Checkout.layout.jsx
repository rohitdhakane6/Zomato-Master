import React from "react";
import CheckoutNavbar from "../components/Navbar/CheckoutNavbar";

function Checkoutlayout(props) {
  return (
    <div>
      <CheckoutNavbar />
      <div className=" mx-auto px-4 lg:px-20">{props.children}</div>
    </div>
  );
}

export default Checkoutlayout;
