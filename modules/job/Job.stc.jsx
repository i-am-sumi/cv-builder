import { Form } from "antd";
import styled from "styled-components";

export const Wapper = styled.div`
  position: relative;
  padding: 20px;

  & .btn {
    position: absolute;
    top: 20px;
    right: 10px;
  }
`;

export const JobForm = styled(Form)`
  margin-top: 20px;
  display: flex;
  gap: 15px;
  padding: 0px 10px;
`;
