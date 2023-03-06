import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ScrollToBottom from "react-scroll-to-bottom";
import socketIO from "socket.io-client";
import { IoSend } from "react-icons/io5";
import { Fade } from "react-awesome-reveal";
import LoginHeadingAnimation from "library/utilities/animations/LoginHeadingsAnimations";
import LoginFormAnimation from "library/utilities/animations/LoginFormAnimation";

import triggerPushNotification from "library/utilities/pushnotification";
import Logo from "components/Logo";

import { globalConstant } from "constant/constant";
import toastMsg from "library/utilities/toastMsg";
import Message from "./components/Message";

const MsgSubmitBtn = styled.button`
  &:active {
    svg,
    span {
      /* pop effect on active */
      transform: scale(1.1);
    }
  }
`;

const Chat = () => {
  const socket = socketIO(globalConstant.chatServerUrl, { transports: ["websocket"] });
  const [textField, setTextField] = useState("");

  const [messages, setMessages] = useState([]);

  const [id, setId] = useState("");
  const [username, setUsername] = useState("Kshitiz");

  const send = async () => {
    await socket.emit("message", {
      message: textField,
      id: id,
    });
    document.getElementById("chatInput").value = "";
  };

  useEffect(() => {
    socket.on("connect", () => {
      setId(socket.id);
      console.log("MY ID: ", socket.id);
      toastMsg("connection established", true);
    });

    socket.emit("joined", { joinedUserName: username });

    socket.on("welcome", (data) => {
      console.log(data.user);
      console.log(data.message);
      setMessages([...messages, data]);
    });

    socket.on("user joined", (data) => {
      console.log(data.user);
      console.log(data.message);
      setMessages([...messages, data]);
    });

    socket.on("leave", (data) => {
      console.log(data.user);
      console.log(data.message);
      setMessages([...messages, data]);
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, []);

  useEffect(() => {
    socket.on("sendMessage", (data) => {
      console.log(data.user);
      console.log(data.message);
      setMessages([...messages, data]);
    });
    return () => {
      socket.off();
    };
  }, [messages]);

  useEffect(() => {
    //todo: set condition to "visible" instead of !== "hidden" to enforce notification when browser is minimized
    if (document.visibilityState !== "hidden") {
      if (messages.length > 0) {
        const lastMsg = messages[messages.length - 1];
        if (lastMsg.id !== id) {
          triggerPushNotification(lastMsg.user, lastMsg.message);
        }
      }
    }
  }, [messages]);

  return (
    <section style={{ minHeight: "100vh", background: "#0f5288" }}>
      <div className='d-flex justify-content-center pt-5'>
        <Logo size='50px' alt='deerwalk logo' className='mt-5 mb-4' />

        {/* <div className='mt-5 mb-4'>
          <LogoSkeleton />
        </div> */}
      </div>
      {/* <div className='d-flex'>
        <inputbut 
          className='rounded-1 border-0 border-bottom'
          name='username'
          type='text'
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <button className='btn btn-primary  bg-primary-blue text-white ms-2 rounded-1'>Set User Name</button>
      </div> */}
      <a href={`${globalConstant.clientUrl}/dashboard-monthly`}>
        <button className='btn btn-primary  bg-primary-blue text-white ms-2 rounded-1'>Back to dashboard</button>
      </a>
      <main className='mx-2'>
        <div className='chatPage'>
          <div className='chatContainer'>
            <div className='header'></div>
            <ScrollToBottom className='chatBox'>
              {messages.map((msg, index) => {
                console.log("msg========");
                console.log(msg);
                return (
                  <Fade key={index}>
                    <Message classes={msg.id === id ? "right" : "left"} user={msg.id === id ? "" : msg.user} message={msg.message} />
                  </Fade>
                );
              })}
            </ScrollToBottom>
            <div className='inputBox'>
              <form>
                <input
                  type='text'
                  id='chatInput'
                  className='roboto_regular'
                  onChange={(e) => {
                    setTextField(e.target.value);
                  }}
                />
                <MsgSubmitBtn
                  className='sendBtn'
                  value={textField}
                  onClick={(e) => {
                    e.preventDefault();
                    send();
                  }}
                >
                  <span className='roboto_regular'>Send</span> <IoSend className='ms-2 fs-3' />
                </MsgSubmitBtn>
              </form>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Chat;
