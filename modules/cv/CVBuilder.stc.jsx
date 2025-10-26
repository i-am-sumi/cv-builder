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

  &:hover {
    background-color: #f5f5f5;
  }

  & .editDeleteBtns {
    position: absolute;
    top: 14px;
    right: 10px;
    display: none;
    gap: 5px;
  }

  &:hover .editDeleteBtns {
    display: flex;
    background: none;
  }
`;

export const ExperienceCard = styled(Card)`
  position: relative;
  margin-top: 5px;

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
export const SkillCard = styled(Card)`
  position: relative;

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
  right: 10px;
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
  border: 1px solid green;
  border-radius: 8px;
`;
