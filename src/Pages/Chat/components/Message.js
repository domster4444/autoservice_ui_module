import React from "react";

const Message = ({ user, message, classes }) => {
  if (user) {
    return (
      <>
        <div className={`primary-shadow message__box roboto_regular  ${classes}`}>{`${user}: ${message}`}</div>
      </>
    );
  } else {
    return (
      <>
        <div className={`primary-shadow message__box roboto_regular  ${classes}`}>{`You: ${message}`}</div>
      </>
    );
  }
};

export default Message;
