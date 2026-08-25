import styled from 'styled-components';

export const Container = styled.div`
  display: inline-flex;
  overflow: hidden;
  border: 1px solid #d5ddea;
  border-radius: 8px;
`;

export const LanguageButton = styled.button<{ $isActive: boolean }>`
  height: 32px;
  padding: 0 10px;
  border: 0;
  background: ${({ $isActive }) => ($isActive ? '#2f80ed' : 'transparent')};
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#5b6b83')};
  cursor: pointer;
  font-size: 12px;
  font-weight: 700;

  &:hover {
    background: ${({ $isActive }) => ($isActive ? '#176bd1' : '#edf4ff')};
  }
`;
