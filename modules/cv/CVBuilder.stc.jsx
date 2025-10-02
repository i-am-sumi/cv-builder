import { Card, Menu } from "antd";
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

export const Iconwrapper = styled.div`
  border-radius: 5px;
`;

export const CustomMenu = styled(Menu)`
& .custom-icon-menu .antMenu
            
  border: 1px dashed #ccc;
  border-radius: 6px;
  margin: 6px 0;
  padding: 10px !important;

`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 10px;
  top: 50px;
  display: flex;
  gap: 5px;
`;
