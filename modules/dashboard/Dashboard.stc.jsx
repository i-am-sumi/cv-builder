import Card from "antd/es/card/Card";
import styled from "styled-components";

export const DashboardCard = styled(Card)`
  position: relative;

  & .mailOutlined-icon {
    color: gray;
    position: absolute;
    top: 30px;
    font-size: 20px;
    right: 10px;
    border-radius: 10%;
  }
  & .phoneOutlined-icon {
    color: #f02a2a;
    position: absolute;
    font-size: 15px;
    top: 30px;
    right: 10px;
    font-size: 20px;
    border-radius: 10%;
  }

  & .star-icon {
    color: #f8e003;
    position: absolute;
    top: 30px;
    right: 10px;
    font-size: 20px;
    border-radius: 10%;
  }

  & .CV-icon {
    color: gray;
    position: absolute;
    top: 30px;
    right: 10px;
    font-size: 20px;
    border-radius: 10%;
  }
`;
