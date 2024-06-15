import React, { useState } from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";

const ChatArea = () => {
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
    <div className="chatArea-container">
      {conversations.length > 0 ? (
        <div className="chatArea-header">
          <p className="cion-icon">{conversations[0].name[0]}</p>
          <div className="header-text">
            <p className="cion-title">{conversations[0].name}</p>
            <p className="cion-timeStamp">{conversations[0].timeStamp}</p>
          </div>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </div>
      ) : null}
      <div className="message-container">
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
        <MessageOther />
        <MessageSelf />
      </div>
      <div className="text-input-Area">
        <input placeholder="Type a message" className="search-box" />
        <IconButton>
          <SendIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default ChatArea;
