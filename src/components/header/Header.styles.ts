import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderElement = styled.header`
  background-color: #ffffff;
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
    background-color: #d7d7d7;
    content: '';
  }
`;

export const Brand = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 5px;
  color: #9c9c9c;
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
  background-color: #9c9c9c;

  &::before {
    position: absolute;
    top: 5px;
    left: 50%;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background-color: #ffffff;
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
    background-color: #ffffff;
    content: '';
    transform: translateX(-50%);
  }
`;

export const Contacts = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: #9c9c9c;
  font-size: 14px;
`;

export const Phone = styled.a`
  color: #0138f9;
  text-decoration: none;
`;

export const Login = styled.button`
  padding: 0;
  border: 0;
  color: #9c9c9c;
  background: transparent;
  cursor: pointer;
`;

export const NavigationRow = styled.div`
  position: relative;
  height: 88px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 32px;
  padding-top: 37px;
`;

export const NavigationLink = styled(NavLink)`
  color: #9c9c9c;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  text-decoration: none;

  &.active {
    color: #0138f9;
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
  border-radius: 24px;
  color: #ffffff;
  background-color: #1521cf;
  box-shadow: 0 4px 4px rgb(0 0 0 / 25%);
  font-size: 16px;
  font-weight: 600;
  text-decoration: none;
`;
