import React from "react";
// import "./mystyles";
const MessageOther = () => {
  var props1 = {
    name: "Person1",
    message: "This is a sent message",
  };
  return (
    <div className="other-message-container">
      <div className="conversation-container">
        <p className="cion-icon">{props1.name[0]}</p>
        <div className="other-text-content">
          <p className="cion-title">{props1.name}</p>
          <p className="cion-lastMessage">{props1.message}</p>
          <p className="self-timeStamp">12:00am</p>
        </div>
      </div>
    </div>
  );
};

export default MessageOther;
