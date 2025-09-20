import Link from "next/link";
import styled from "styled-components";

export const SocialIcon = styled(Link)`
  padding: 5px;
  background: gray;
  &:hover {
    background: #4338ca;
  }
`;

export const InputItem = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  background-color: #1f2937;
  color: #f3f4f6;

  &::placeholder {
    color: #9ca3af;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #6366f1;
  }
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  background-color: #4f46e5;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #6366f1;
  }
`;

export const FooterBottom = styled.div`
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #9ca3af;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.75rem;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;
