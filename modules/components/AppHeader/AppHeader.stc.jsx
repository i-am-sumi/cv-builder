import { Avatar, Layout, Tag } from "antd";
import styled from "styled-components";

const { Header } = Layout;

export const Navber = styled(Header)`
  display: flex;
  width: 100%;
  min-height: 80px;
  top: 0;
  z-index: 1000;
  flex-wrap: wrap;
  flex-wrap: wrap;
  background-color: white;
  position: sticky;
  align-items: center;

  & .menu-item {
    justify-content: center;
    background: transparent;
    font-size: 15px;
    font-weight: bold;
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
      "Lucida Sans Unicode", Geneva, Verdana, sans-serif;

    overflow: hidden;
  }

  & .thing {
    cursor: pointer;
  }
`;
export const TagItem = styled(Tag)`
  font-size: 16px;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 10px;
  color: #f9fbfdff;
  background-color: #1890ff;
`;

export const User = styled(Avatar)`
  color: #f9fbfdff;
  background: #1890ff;
  font-weight: bold;
  padding: 5px;
  margin-bottom: 7px;
`;
