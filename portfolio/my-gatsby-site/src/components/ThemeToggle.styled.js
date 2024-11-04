// ThemeToggle.styled.js
import styled from 'styled-components';

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeToggleBtn = styled.button`
  margin-right: 8px;
  padding: 0;
  background-color: transparent;
  border: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 1.5rem; 
  color: ${({ theme }) => (theme === "dark" ? "#fff" : "#3e85f3")};

  &:last-child {
    margin-right: 0;
  }

  @media screen and (min-width: 768px) {
    margin-right: 14px;
    width: 32px;
    height: 32px;
    font-size: 2rem;
  }
`;
