import { Card, Flex, Typography } from "antd";
import styled from "styled-components";
const { Text } = Typography;

export const Span = styled(Text)`
  color: white;
  display: block;
  font-size: 18px;
  font-family: sans-serif;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const Buttons = styled(Flex)`
  text-align: center;
  margin-top: 15px;

  & .button {
    min-width: 140px;
    height: 40px;
    line-height: 40px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(4px);
    webkitbackdrop-filter: blur(4px);
  }
`;

export const HomeSectionCard = styled(Card)`
  width: 100%;
  backdrop-filter: blur(8px);
  webkitbackdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-top: 10px;
`;
