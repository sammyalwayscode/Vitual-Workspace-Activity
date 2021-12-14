import React from "react";
import styled from "styled-components";
import { FiActivity } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import pic from "../img/2.svg";
const NewActive = () => {
  return (
    <Container>
      <Wrapper>
        <ActiveTitleIcon>
          <FiActivity />
          Activity
        </ActiveTitleIcon>
        <ActiveContent>
          <ImgCircle>
            <ImageDiv src={pic} />
          </ImgCircle>
          <ImgText>No activity yet, Invite people to get started</ImgText>
        </ActiveContent>
      </Wrapper>
    </Container>
  );
};

export default NewActive;

const Container = styled.div`
  width: 100%;
  /* background-color: red; */
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 100%;
  /* background-color: gold; */
`;
const ActiveTitleIcon = styled.div`
  width: 130px;
  /* background-color: green; */
  font-family: Fredoka One, cursive;
  display: flex;

  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
  font-size: 25px;
`;
const ActiveContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: hotpink; */
  min-height: 80vh;
`;

const ImgCircle = styled.div`
  margin-top: -70px;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  background-color: #a2a2a2;
  display: flex;

  justify-content: center;
`;
const ImageDiv = styled.img`
  width: 170px;
`;

const ImgText = styled.div`
  font-size: 12px;
  font-family: Fredoka One, cursive;
`;
