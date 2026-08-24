import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderElement = styled.header`
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: ${({ theme }) => theme.colors.surface};
`;

export const Container = styled.div`
  width: min(calc(100% - 48px), 1368px);
  margin: 0 auto;
`;

export const TopRow = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 76px;

  &::after {
    position: absolute;
    right: 16px;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.border};
    content: '';
  }
`;

export const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  margin-left: 5px;
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 16px;
  text-decoration: none;
`;

export const BrandMark = styled.span`
  position: relative;
  display: block;
  width: 28px;
  height: 28px;
  overflow: hidden;
  border-radius: 50%;
  color: transparent;
  background-color: ${({ theme }) => theme.colors.textTertiary};

  &::before {
    position: absolute;
    top: 5px;
    left: 50%;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.surface};
    content: '';
    transform: translateX(-50%);
  }

  &::after {
    position: absolute;
    bottom: 4px;
    left: 50%;
    width: 16px;
    height: 8px;
    border-radius: 9px 9px 5px 5px;
    background-color: ${({ theme }) => theme.colors.surface};
    content: '';
    transform: translateX(-50%);
  }
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 14px;
`;

export const Phone = styled.a`
  color: ${({ theme }) => theme.colors.focus};
  text-decoration: none;
`;

export const Login = styled.button`
  padding: 0;
  border: 0;
  color: ${({ theme }) => theme.colors.textTertiary};
  background: transparent;
  cursor: pointer;
`;

export const NavigationRow = styled.div`
  position: relative;
  height: 88px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.xxl};
  padding-top: 37px;
`;

export const NavigationLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.textTertiary};
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.focus};
  }
`;

export const LoanButton = styled(NavLink)`
  position: absolute;
  top: 20px;
  right: 0;
  display: grid;
  width: 329px;
  height: 48px;
  place-items: center;
  border-radius: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.surface};
  background-color: ${({ theme }) => theme.colors.primaryHover};
  box-shadow: ${({ theme }) => theme.shadows.button};
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;

export const ThemeSelect = styled.select`
  padding: 6px 8px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.s};
  color: ${({ theme }) => theme.colors.textContent};
  background-color: ${({ theme }) => theme.colors.surface};
  font-size: 12px;
  cursor: pointer;
`;
