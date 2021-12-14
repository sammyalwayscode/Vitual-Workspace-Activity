import React from "react";
import styled from "styled-components";
import { FiActivity } from "react-icons/fi";
import { BiTask } from "react-icons/bi";
import { FaTasks } from "react-icons/fa";
import pic from "../img/2.svg";
import NewActive from "./NewAvtive";
import NowActive from "./NowActive";
const ActivityPage = () => {
  return (
    <Container>
      <Wrapper>
        {/* <NewActive /> */}
        <NowActive />
      </Wrapper>
    </Container>
  );
};

export default ActivityPage;

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
`;
