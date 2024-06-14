import React from "react";

function ConversationsItem({ conversation }) {
  const { name, lastMessage, timeStamp } = conversation;
  return (
    <div className="conversation-container">
      <p className="con-icon">{name[0]}</p>
      <p className="con-title">{name}</p>
      <p className="con-lastMessage">{lastMessage}</p>
      <p className="con-timeStamp">{timeStamp}</p>
    </div>
  );
}

export default ConversationsItem;
