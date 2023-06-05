import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Admin } from "../pages/Admin";
import { Edit } from "../pages/Edit";
import { Login } from "../pages/Login";
import { PageNotFound } from "../pages/PageNotFound";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/admin"} element={<Admin />} />
      <Route path={"/edit/:id"} element={<Edit />} />
      <Route path={"/login"} element={<Login />} />
      <Route path={"*"} element={<PageNotFound />} />
    </Routes>
  );
};
