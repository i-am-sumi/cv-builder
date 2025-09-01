import { Flex } from "antd";
import styled from "styled-components";

export const Analytics = styled(Flex)`
  & .analytics-title {
    font-size: 24px;
    text-align: center;
    font-weight: bold;
    color: blue;
  }

  & .analytics-text {
    text-align: center;
    color: gray;
    font-size: small;
  }
  & .analytics-div {
    display: flex;
    justify-content: space-between;
  }
`;
