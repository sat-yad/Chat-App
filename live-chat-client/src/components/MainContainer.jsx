import React, { useState } from "react";
import "./Mystyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import UsersGroups from "./UsersGroups";
import { Outlet } from "react-router-dom";

const MainContainer = () => {
  return (
    <div className="main-container">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default MainContainer;
