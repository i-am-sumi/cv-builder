import { Card, Flex, Typography } from "antd";

import styled from "styled-components";
const { Text, Title } = Typography;

export const Span = styled(Text)`
  color: white;
  display: block;
  font-size: 18px;
  font-family: sans-serif;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
`;

export const HomeTitle = styled(Title)`
  text-align: center;
  font-family: cursive;
  align-items: center;
  padding-top: 30px;
  font-size: 45px;
`;

export const Buttons = styled(Flex)`
  text-align: center;
  margin-top: 25px;

  & .button1 {
    min-width: 140px;
    height: 40px;
    line-height: 40px;
    border: none;
    background-color: white;
    color: #3232eb;
    font-size: 14px;
    font-weight: bold;
  }

  & .button2 {
    min-width: 140px;
    height: 40px;
    line-height: 40px;
    border: 1px solid blue;
    backdrop-filter: blur(1px);
    webkitbackdrop-filter: blur(1px);
  }
`;

export const Section = styled.section`
  position: relative;
  padding: 20px;

  background: linear-gradient(to right, #a6a6ec, #fa04ee);

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: multiply;
  background-color: #a7c5f5;
`;

export const HomeSectionCard = styled(Card)`
  width: 100%;
  height: 250px;
  backdrop-filter: blur(4px);
  webkitbackdrop-filter: blur(4px);
  data-aos: fade-right;
  border: none;
  color: #fff;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  margin-top: 40px;
`;
