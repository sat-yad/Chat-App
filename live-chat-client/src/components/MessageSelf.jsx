import React from "react";

const MessageSelf = () => {
  var props2 = {
    name: "Random User",
    message: "I replied to that message",
  };
  return (
    <div className="self-message-container">
      <div className="messageBox">
        <p>{props2.message}</p>
        <p className="self-timeStamp">12:01am</p>
      </div>
    </div>
  );
};

export default MessageSelf;
