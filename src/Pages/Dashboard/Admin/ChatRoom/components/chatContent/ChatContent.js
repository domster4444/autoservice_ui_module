import React, { Component, useState, createRef, useEffect } from "react";
import ScrollToBottom from "react-scroll-to-bottom";

import "./chatContent.css";
import Avatar from "../chatList/Avatar";
import ChatItem from "./ChatItem";

import { BiCog } from "react-icons/bi";
import { FaPlus, FaPaperPlane } from "react-icons/fa";

export default class ChatContent extends Component {
  messagesEndRef = createRef(null);
  chatItms = [
    {
      key: 6,
      image: "https://doko.dwit.edu.np/images/studentProfile/ritika_phuyal.JPG",
      type: "",
      msg: "what plan mate?",
    },
    {
      key: 7,
      image: "https://doko.dwit.edu.np/images/studentProfile/Prasansha_Bharati_2024.jpg",
      type: "other",
      msg: "I'm taliking about the tutorial",
    },
  ];

  constructor(props) {
    super(props);
    this.state = {
      chat: this.chatItms,
      msg: "",
    };
  }

  componentDidMount() {
    window.addEventListener("keydown", (e) => {
      if (e.keyCode == 13) {
        if (this.state.msg != "") {
          this.chatItms.push({
            key: 1,
            type: "",
            msg: this.state.msg,
            image: "https://doko.dwit.edu.np/images/studentProfile/ritika_phuyal.JPG",
          });
          this.setState({ chat: [...this.chatItms] });
          this.setState({ msg: "" });
        }
      }
    });
  }
  onStateChange = (e) => {
    this.setState({ msg: e.target.value });
  };

  render() {
    return (
      <div className='main__chatcontent'>
        <div className='content__header'>
          <div className='blocks'>
            <div className='current-chatting-user'>
              <Avatar isOnline='active' image='https://doko.dwit.edu.np/images/studentProfile/Prasansha_Bharati_2024.jpg' />
              <p>Prasansha Bharati</p>
            </div>
          </div>

          <div className='blocks'>
            <div className='settings'>
              <button className='btn-nobg'>
                <BiCog className='text-primary-blue' />
              </button>
            </div>
          </div>
        </div>
        <div className='content__body'>
          <ScrollToBottom className='chat__items'>
            {this.state.chat.map((itm, index) => {
              return <ChatItem animationDelay={index + 2} key={itm.key} user={itm.type ? itm.type : "me"} msg={itm.msg} image={itm.image} />;
            })}
            <div ref={this.messagesEndRef} />
          </ScrollToBottom>
        </div>
        <div className='content__footer'>
          <div className='sendNewMessage'>
            <input type='text' placeholder='Type a message here' onChange={this.onStateChange} value={this.state.msg} />
            <button className='btnSendMsg' id='sendMsgBtn'>
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    );
  }
}
