import React from 'react';
import myImage from '../assets/images/avatar.jpg';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  max-width: 300px;
  margin: 20px auto;
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 3px solid #C586C0;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Name = styled.h2`
  margin: 0;
  color: #333;
`;

const Description = styled.p`
  color: #666;
`;

function ProfileCard() {
  return (
    <Card>
      <Avatar src={myImage} alt="Your Name" />
      <Name>你的名字</Name>
      <Description>前端开发工程师</Description>
      <Description>example@example.com</Description>
      <Description>www.example.com</Description>
    </Card>
  );
}

export default ProfileCard;

  