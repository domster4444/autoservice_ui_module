import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";
import { globalConstant } from "constant/constant";

import { IoMdArrowRoundBack } from "react-icons/io";

export default class ChatList extends Component {
  allChatUsers = [
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/Prasansha_Bharati_2024.jpg",
      id: 1,
      name: "Prasansha",
      active: true,
      isOnline: true,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/bca_2025_stuti_poudel.JPG",
      id: 2,
      name: "Swastik",
      active: false,
      isOnline: false,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/bca_2025_ujjwal_basnet.jpg",
      id: 3,
      name: "Bijay",
      active: false,
      isOnline: false,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/bca_2025_gaurav_neupane.jpg",
      id: 4,
      name: "Nabin",
      active: false,
      isOnline: true,
    },
    {
      image: "https://avatars.githubusercontent.com/u/33199104?v=4",
      id: 5,
      name: "Kshitiz",
      active: false,
      isOnline: false,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/deena%20sitikhu_2022.jpg",
      id: 6,
      name: "Suraj",
      active: false,
      isOnline: true,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/bca_2025_shubhanggam_parajuli.JPG",
      id: 7,
      name: "Rajesh",
      active: false,
      isOnline: true,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/denisha%20singh_2022.jpg",
      id: 8,
      name: "Kritika",
      active: false,
      isOnline: false,
    },
    {
      image: "https://doko.dwit.edu.np/images/studentProfile/bca_2025_sophi_shrestha.JPG",
      id: 9,
      name: "Bibhuti",
      active: false,
      isOnline: true,
    },
    {
      image: "https://pbs.twimg.com/profile_images/770394499/female.png",
      id: 10,
      name: "Dikshya",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  render() {
    return (
      <div className='main__chatlist'>
        <a href={`${globalConstant.clientUrl}/dashboard-monthly`}>
          <button className='btn mb-5'>
            <IoMdArrowRoundBack />
            <span className='roboto_bold text-primary-blue fs-5'>Back</span>
          </button>
        </a>
        <div className='chatlist__heading'>
          <h2>Chats</h2>
          <button className='btn-nobg'>
            <i className='fa fa-ellipsis-h'></i>
          </button>
        </div>
        <div className='chatList__search'>
          <div className='search_wrap'>
            <input type='text' placeholder='Search Here' required />
            <button className='search-btn'>
              <i className='fa fa-search'></i>
            </button>
          </div>
        </div>
        <div className='chatlist__items'>
          {this.state.allChats.map((item, index) => {
            return <ChatListItems name={item.name} key={item.id} animationDelay={index + 1} active={item.active ? "active" : ""} isOnline={item.isOnline ? "active" : ""} image={item.image} />;
          })}
        </div>
      </div>
    );
  }
}
