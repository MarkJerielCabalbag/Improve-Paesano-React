import React from "react";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "../../pages/Home";
import Book from "../../pages/Book";
import Account from "../../pages/Account";
import Creator from "../../pages/Creator";

const Navbar = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Dashboard />}>
        <Route path="home" element={<Home />} />
        <Route path="book" element={<Book />} />
        <Route path="account" element={<Account />} />
        <Route path="creator" element={<Creator />} />
      </Route>
    )
  );
  return (
    <RouterProvider router={router}>
      <Dashboard />
    </RouterProvider>
  );
};

export default Navbar;
