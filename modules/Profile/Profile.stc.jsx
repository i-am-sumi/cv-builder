import styled from "styled-components";

export const ProfileSection = styled.div`
  padding: 10px 48px;
  position: relative;
  margin-bottom: 16px;

  & .div {
    display: flex;
    justify-content: space-between;
    margin: 4px;
    background-color: white;
    padding: 15px;
  }
  .btn-class {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    @media (min-width: 640px) {
      flex-direction: row;
      align-items: center;
    }

    align-items: flex-end;
  }
`;
