import { CalendarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import styled from "styled-components";

export const Wrapper = styled(Card)`
  width: 100%;
  position: relative;
`;

export const ProfessionalCSection = styled.div`
  & .btns {
    position: absolute;
    top: 45px;
    right: 10px;
    display: flex;
    gap: 5px;
  }
  & .icon {
    color: blue;
    margin-bottom: 8px;
    font-size: 13px;
    margin-right: 4px;
  }

  & .card {
    margin-top: 10px;
    background-color: #f0eff8ff;
    width: 100%;
    position: relative;
  }
`;

export const CalendarIcon = styled(CalendarOutlined)`
  color: #f08e0eff;
  margin-bottom: 8px;
  font-size: 13px;
  margin-right: 4px;
`;
