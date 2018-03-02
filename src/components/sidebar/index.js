import React from "react";
import BasketCart from "../basketCart";
import Search from "../search";
import Categories from "../categories";

const Sidebar = () => (
  <div>
    <BasketCart />
    <Search />
    <Categories />
  </div>
);

export default Sidebar;
