import { Card, Layout } from "antd";
import styled from "styled-components";
const { Header } = Layout;

export const CVBuilder = styled.div`
  margin: 10px 40px;
  display: flex;
  gap: 15px;
`;

export const CVbuilderCard = styled(Card)`
  :hover {
    background-color: #f3f4ff;
  }
  & .user-icon {
    background-color: blue;
    padding: 6px;
    border-radius: 5px;
    margin-top: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    color: white;
  }
`;
export const ExperienceCard = styled(Card)`
  position: relative;

  .EditDeleteBtns {
    position: absolute;
    top: 14px;
    right: 10px;
    display: none;
    gap: 5px;
  }

  &:hover .EditDeleteBtns {
    display: flex;
  }
`;
export const EducationCard = styled(Card)`
  position: relative;

  .EditDeleteBtns {
    position: absolute;
    top: 14px;
    right: 10px;
    display: none;
    gap: 5px;
  }

  &:hover .EditDeleteBtns {
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
