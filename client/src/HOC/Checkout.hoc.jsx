import React from "react";
import { Route, Routes } from "react-router-dom";
import Checkoutlayout from "../layouts/Checkout.layout";

function Checkoutlayouthoc({ component: Component, path, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        path={path}
        element={
          <Checkoutlayout>
            <Component />
          </Checkoutlayout>
        }
      />
    </Routes>
  );
}

export default Checkoutlayouthoc;
