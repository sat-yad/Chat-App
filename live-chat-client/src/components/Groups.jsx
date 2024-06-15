import React from "react";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../../Icons/live-chat.png";

const Groups = () => {
  return (
    <div className="list-container">
      <div className="ug-header">
        <img src={logo} style={{ height: "2rem", width: "2rem" }} />
        <p className="ug-title">Available Groups</p>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon />
        </IconButton>
        <input className="search-box" placeholder="Search" />
      </div>
      <div className="ug-list">
        <div className="list-tem">
          <p className="cion-icon">G</p>
          <p className="cion-title">Group 1</p>
        </div>
        <div className="list-tem">
          <p className="cion-icon">G</p>
          <p className="cion-title">Group 2</p>
        </div>
        <div className="list-tem">
          <p className="cion-icon">G</p>
          <p className="cion-title">Group 3</p>
        </div>
        <div className="list-tem">
          <p className="cion-icon">G</p>
          <p className="cion-title">Group 4</p>
        </div>
        <div className="list-tem">
          <p className="cion-icon">G</p>
          <p className="cion-title">Group 5</p>
        </div>
        <div className="list-tem">
          <p className="cion-icon">G</p>
          <p className="cion-title">Group 6</p>
        </div>
      </div>
    </div>
  );
};

export default Groups;
