import { Card } from "antd";
import styled from "styled-components";

export const CVBuilder = styled.div`
  margin: 10px 40px;
  display: flex;
  gap: 15px;

  & .MenuItem {
    color: gray;
    width: ;
    border: 2px solid red;
    border-inline-end: 0;
  }
`;

export const CVbuilderCard = styled(Card)`
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
