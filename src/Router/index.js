import React from "react";
import router from "./router";
import { Route, Routes } from "react-router-dom";
import LoginScreen from "../Pages/LoginScreen/LoginScreen";
import HomeSceen from "../Pages/HomeSceen/HomeSceen";

const RouterProvider = () => {
  return (
    <Routes>
      {router.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            element={route.name !== "Login" ? <HomeSceen /> : <LoginScreen />}
          ></Route>
        );
      })}
    </Routes>
  );
};

export default RouterProvider;
