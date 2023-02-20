import React from "react";
import styled from "styled-components";

import LetteredAvatar from "react-lettered-avatar";

const AvatarContainer = styled.div`
  display: flex;
  text-align: left;
`;

const AvatarImageContainer = styled.div`
  height: 45px;
  width: 45px;
  padding: 0.05rem;
  margin-right: 1rem;
  img {
    border-radius: 50%;
    overflow: hidden;
    width: 100%;
  }
`;

const Avatar = ({ name, role, url }) => {
  return (
    <>
      <AvatarContainer>
        <AvatarImageContainer>
          <img src='https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png' alt='avatar' />

          {/* <LetteredAvatar name={name} className='mt-0' /> */}
        </AvatarImageContainer>

        <div>
          <h6 className='m-0'>{name}</h6>
          <p className='m-0'>{role}</p>
        </div>
      </AvatarContainer>
    </>
  );
};

export default Avatar;
