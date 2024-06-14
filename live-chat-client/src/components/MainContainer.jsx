import React, { useState } from "react";
import "./Mystyles.css";
import Sidebar from "./Sidebar";
import ChatArea from "./ChatArea";
import Welcome from "./Welcome";
import CreateGroups from "./CreateGroups";
import UsersGroups from "./UsersGroups";

const MainContainer = () => {
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

  return (
    <div className="main-container">
      <Sidebar conversations={conversations} />
      {/* <CreateGroups /> */}
      <UsersGroups />
    </div>
  );
};

export default MainContainer;
