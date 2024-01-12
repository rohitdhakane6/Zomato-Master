import React from "react";
import { Route, Routes } from "react-router-dom";

import HomeLayout from "../layouts/Homepage.layout";

function HomeLayoutHOC({ component: Component,path, ...rest }) {
  return (
    <Routes>
      <Route
        {...rest}
        path={path}
        element={
          <HomeLayout>
            <Component/>
          </HomeLayout>
        }
      />
    </Routes>
  );
}

export default HomeLayoutHOC;
