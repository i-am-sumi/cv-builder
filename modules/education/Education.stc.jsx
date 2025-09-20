import styled from "styled-components";

export const EducationSection = styled.div`
  padding: 0px 48px;
  position: relative;
  margin-bottom: 5px;

  & .education-card {
    width: 100%;

    box-shadow: var(--shadow-md);
    & .education-card-item {
      display: flex;
      justify-content: space-between;
      align-items: start;
      gap: 5px;
      margin-bottom: 10px;
    }
    & .education-div {
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
      color: gray;
      font-size: small;
      align-items: center;
    }
    & .education-item {
      display: flex;
      flex-wrap: wrap;
      margin-top: "5px";
    }
  }
`;

export const EditDeleteBtns = styled.div`
  position: absolute;
  top: 14px;
  right: 10px;
  display: flex;
  gap: 5px;
`;

export const EducationListItem = styled.div`
  list-style-type: disc;
  padding-left: 20px;
  color: #9ca3af;
`;

export const EduHeader = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  flex-wrap: wrap;

  & .edu-header {
    margin: 0;
  }

  &.edu-div {
    padding-top: 5px;
  }
`;
