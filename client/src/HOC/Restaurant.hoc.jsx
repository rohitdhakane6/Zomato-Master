import React from "react";
import { Route, Routes } from "react-router-dom";

import RestaurantLayout from "../layouts/Restaurant.Layout";

function RestaurantLayoutHOC({ component: Component,path, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        path={path}
        element={
          <RestaurantLayout>
            <Component/>
          </RestaurantLayout>
        }
      />
    </Routes>
  );
}

export default RestaurantLayoutHOC;
