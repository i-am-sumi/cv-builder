import { Card } from "antd";
import styled from "styled-components";

export const SkillComponents = styled.div`
  position: relative;
  margin-bottom: 5px;
  padding: 0 48px;

  & .breadcrumb {
    font-size: 20px;
    font-weight: bold;
    overflow-wrap: break-word;
    line-height: 16px;
    flex: 1 1 0%;
    margin: 16px 0;

    @media (min-width: 640px;) {
      font-size: large;
    }
  }
  & .paragraph {
    text-align: center;
    font: icon;
  }
  & .flex-buttons {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-top: 10px;
  }
`;

export const ToolsCard = styled(Card)`
  display: flex;
  justify-content: center;
`;
