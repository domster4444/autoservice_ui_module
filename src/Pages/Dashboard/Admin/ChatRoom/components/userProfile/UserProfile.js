import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className='main__userprofile'>
        <div className='profile__card user__profile__image'>
          <div className='profile__image'>
            <img style={{ height: "100%" }} src='https://doko.dwit.edu.np/images/studentProfile/ritika_phuyal.JPG' />
          </div>
          <h4>Ritika Phuyal</h4>
          <p className='text-center'>Admin Department</p>
        </div>
      </div>
    );
  }
}
