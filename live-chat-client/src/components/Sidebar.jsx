import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import ConversationsItem from "./ConversationsItem";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const iconStyle = { color: "green" };
  const navigate = useNavigate();
  const [conversations, setConversations] = useState([
    {
      name: "Person1",
      lastMessage: "last Message",
      timeStamp: "Today",
    },
    {
      name: "Person2",
      lastMessage: "last Message",
      timeStamp: "Today",
    },
    {
      name: "Person3",
      lastMessage: "last Message",
      timeStamp: "Today",
    },
  ]);
  let props;
  return (
    <div className="sidebar-container">
      <div className="sb-header">
        <div>
          <IconButton>
            <AccountCircleIcon sx={iconStyle} />
          </IconButton>
        </div>
        <div>
          <IconButton
            onClick={() => {
              navigate("users");
            }}
          >
            <PersonAddIcon sx={iconStyle} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("groups");
            }}
          >
            <GroupAddIcon sx={iconStyle} />
          </IconButton>
          <IconButton
            onClick={() => {
              navigate("create-group");
            }}
          >
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
          <ConversationsItem key={conversation.name} props={conversation} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
