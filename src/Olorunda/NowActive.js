import React from "react";
import styled from "styled-components";
import { FiActivity } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { FaProjectDiagram } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import avat from "./aaa.JPG";

const activityData = [
  {
    TitleText: "Get 100 new bank coustomers",
    SubTitleText: "Project Created by Tim Joe",
    piority: "High",
    dateText: "23 Nov",
    avatarImg: `${avat}`,
  },
  {
    TitleText: "Get 100 new bank coustomers",
    SubTitleText: "Project Created by Tim Joe",
    piority: "High",
    dateText: "23 Nov",
    avatarImg: `${avat}`,
  },
  {
    TitleText: "Get 100 new bank coustomers",
    SubTitleText: "Project Created by Tim Joe",
    piority: "High",
    dateText: "23 Nov",
    avatarImg: `${avat}`,
  },
  {
    TitleText: "Get 100 new bank coustomers",
    SubTitleText: "Project Created by Tim Joe",
    piority: "High",
    dateText: "23 Nov",
    avatarImg: `${avat}`,
  },
];

const NowActive = () => {
  return (
    <Container>
      <ActiveTitleIcon>
        <FiActivity />
        Activity
      </ActiveTitleIcon>
      <Wrapper>
        <ActivityContent>Today</ActivityContent>
        <ToLine></ToLine>
        {activityData?.map((props) => (
          <>
            <ActNotBox key={props.id}>
              <BoxOne>
                <IconType>
                  {" "}
                  <FaProjectDiagram color="#fff" size="10px" />{" "}
                </IconType>
                <ActionNotText>
                  <MainText> {props.TitleText} </MainText>
                  <SubText> {props.SubTitleText} </SubText>
                </ActionNotText>
                <ImgCir src={props.avatarImg} />
              </BoxOne>
              <BoxTwo>
                <LitText> {props.dateText} </LitText>
                <IconsPac>
                  <Icon1>
                    {" "}
                    <AiFillFolderAdd />{" "}
                  </Icon1>
                  <Icon2> {props.piority} </Icon2>
                  <Icon3>
                    {" "}
                    <AiOutlineDelete />{" "}
                  </Icon3>
                </IconsPac>
              </BoxTwo>
            </ActNotBox>
            <ToLineMin></ToLineMin>
          </>
        ))}
      </Wrapper>
    </Container>
  );
};

export default NowActive;

const Container = styled.div`
  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-wrap: wrap;
  /* background-color: brown; */
`;
const Wrapper = styled.div`
  width: 93%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
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
  margin-bottom: 20px;
`;
const ActivityContent = styled.div`
  width: 100%;
  /* background-color: blue; */
`;

const ToLine = styled.div`
  height: 2px;
  width: 100%;
  background: #ebebeb;
`;
const ToLineMin = styled.div`
  height: 2px;
  width: 93%;
  background: #ebebeb;
`;

const ActNotBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const BoxOne = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconType = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: #7f5af2;
`;
const ActionNotText = styled.div`
  margin-left: 10px;
`;
const MainText = styled.div`
  font-size: 14px;
  font-weight: 600;
`;
const SubText = styled.div`
  font-size: 10px;
`;
const ImgCir = styled.img`
  margin-left: 10px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: brown;
  object-fit: cover;
`;
const BoxTwo = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  margin-bottom: 8px;
`;
const LitText = styled.div`
  font-size: 14px;
`;
const IconsPac = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon1 = styled.div`
  height: 20px;
  width: 20px;
  background-color: #377dff;
  border-radius: 50%;
  color: #fff;
  font-size: 13px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon2 = styled.div`
  height: 20px;
  width: 60px;
  background-color: #ffd700;
  border-radius: 100px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 7px;
`;
const Icon3 = styled.div`
  height: 20px;
  width: 20px;
  background-color: #e90101;
  border-radius: 50%;
  color: #fff;
  font-size: 15px;
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;
