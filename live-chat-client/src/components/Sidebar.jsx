import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";

const Sidebar = ({ conversations }) => {
  const iconStyle = { color: "royalblue" };

  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon sx={iconStyle} />
          </IconButton>
        </div>
        <div>
          <IconButton>
            <PersonAddIcon sx={iconStyle} />
          </IconButton>
          <IconButton>
            <GroupAddIcon sx={iconStyle} />
          </IconButton>
          <IconButton>
            <AddCircleIcon sx={iconStyle} />
          </IconButton>
          <IconButton>
            <NightlightIcon sx={iconStyle} />
          </IconButton>
        </div>
      </div>
      <div className="sb-search">
        <IconButton>
          <SearchIcon sx={iconStyle} />
        </IconButton>
        <input
          className="search-box"
          placeholder="Search"
          color="rgb(58, 57, 57)"
        />
      </div>
      <div className="sb-conversations">
        {conversations.map((conversation, index) => (
          <ConversationsItem key={index} conversation={conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
