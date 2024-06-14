import React from "react";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import MessageOther from "./MessageOther";
import MessageSelf from "./MessageSelf";

const ChatArea = ({ conversations }) => {
  return (
    <div className="chatArea-container">
      {conversations.length > 0 ? (
        <div className="chatArea-header">
          <p className="con-icon">{conversations[0].name[0]}</p>
          <div className="header-text">
            <p className="con-title">{conversations[0].name}</p>
            <p className="con-timeStamp">{conversations[0].timeStamp}</p>
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
