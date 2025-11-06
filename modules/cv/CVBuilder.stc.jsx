import { Card, Layout } from "antd";
import styled from "styled-components";
const { Header } = Layout;

export const CVBuilder = styled.div`
  margin: 10px 40px;
  display: flex;
  gap: 15px;
`;

export const CVbuilderCard = styled(Card)`
  position: relative;
  transition: background-color 0.3s ease;
  border: none;

  &:hover {
    background-color: #f5f5f5;
  }

  .resume-item {
    display: flex;
    justify-content: space-between;
    position: relative;
    padding: 10px 12px;
    border-radius: 8px;
    transition: background-color 0.3s ease;
  }

  .resume-item:hover {
    background-color: #f0f2ff;
  }

  .resume-item .editDeleteBtns {
    position: absolute;
    top: 8px;
    right: 8px;
    display: none;
    gap: 5px;
  }

  .resume-item:hover .editDeleteBtns {
    display: flex;
  }
`;

export const ExperienceCard = styled(Card)`
  position: relative;
  margin-top: 5px;
  background-color: #eaffea;

  & .editDeleteBtns {
    position: absolute;
    top: 14px;
    right: 10px;
    display: none;
    gap: 5px;
  }

  &:hover .editDeleteBtns {
    display: flex;
  }
`;
export const EducationCard = styled(Card)`
  position: relative;
  background-color: #eaffea;

  & .editDeleteBtns {
    position: absolute;
    top: 14px;
    right: 10px;
    display: none;
    gap: 5px;
  }

  &:hover .editDeleteBtns {
    display: flex;
  }
`;
export const SkillCard = styled(Card)`
  position: relative;
  background-color: #eaffea;

  .editDeleteBtns {
    position: absolute;
    top: 14px;
    right: 10px;
    display: none;
    gap: 5px;
  }

  &:hover .editDeleteBtns {
    display: flex;
  }
`;

export const Iconwrapper = styled.div`
  border-radius: 5px;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 30px;
  top: 50px;
  display: flex;
  gap: 5px;
`;

export const Navber = styled(Header)`
  width: 100%;
  min-height: 80px;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;
  flex-wrap: wrap;
  background-color: #e5ecfd;
  position: sticky;
  padding-top: 10px;
`;

export const CloneCard = styled(Card)`
  border: 1px solid #e9edf1;
  border-radius: 8px;
`;

export const CheckBoxIcon = styled.div`
  position: absolute;
  top: -6px;
  right: -6px;
  background-color: #28a745;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 10px;
  border: 2px solid white;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`;

export const ResumeSection = styled(Layout)`
  background-color: white;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.08);
  max-width: 1000px;
  margin: auto;
`;
export const SummarySection = styled.div`
  position: relative;
  margin-bottom: 30px;

  & .editButton {
    position: absolute;
    top: 20px;
    right: 10px;
    display: none;
    gap: 5px;
    border: 1px solid grey;
  }
  &:hover .editButton {
    display: flex;
  }
`;
