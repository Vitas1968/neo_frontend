import styled from 'styled-components';

export const Page = styled.main`
  width: min(calc(100% - 48px), 1280px);
  min-height: calc(100vh - 164px);
  margin: 0 auto;
  padding: 185px 23px 80px 25px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 395px 586px;
  gap: 195px;
`;

export const AccountSection = styled.section`
  display: flex;
  flex-direction: column;
`;

export const BankCard = styled.article`
  position: relative;
  width: 395px;
  height: 227px;
  padding: 38px;
  overflow: hidden;
  border-radius: 30px;
  color: ${({ theme }) => theme.colors.surface};
  background: linear-gradient(135deg, #8727f5 0%, #413cf1 100%);
  box-shadow: 0 18px 34px rgba(79, 58, 241, 0.2);

  &::before,
  &::after {
    position: absolute;
    z-index: 0;
    border-radius: 50%;
    content: '';
  }

  &::before {
    top: -148px;
    right: -67px;
    width: 284px;
    height: 284px;
    background: rgba(209, 77, 255, 0.32);
  }

  &::after {
    bottom: -215px;
    left: -88px;
    width: 330px;
    height: 330px;
    background: rgba(60, 35, 211, 0.4);
  }
`;

export const CardLabel = styled.p`
  position: relative;
  z-index: 1;
  margin: 0;
  font-size: 14px;
  font-style: italic;
  opacity: 0.7;
`;

export const Balance = styled.p`
  position: relative;
  z-index: 1;
  margin: 12px 0 0;
  font-size: 32px;
  font-style: italic;
  font-weight: 400;
`;

export const CardNumber = styled.p`
  position: absolute;
  z-index: 1;
  bottom: 29px;
  left: 38px;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
`;

export const CardDate = styled.p`
  position: absolute;
  z-index: 1;
  right: 38px;
  bottom: 29px;
  margin: 0;
  font-size: 13px;
`;

export const PaymentSystem = styled.div`
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 36px;
  display: grid;
  justify-items: center;
`;

export const PaymentCircles = styled.div`
  display: flex;
`;

export const PaymentCircle = styled.span<{ $color: string }>`
  display: block;
  width: 32px;
  height: 32px;
  margin-left: -8px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};

  &:first-child {
    margin-left: 0;
  }
`;

export const PaymentName = styled.span`
  margin-top: 5px;
  font-size: 10px;
  line-height: 10px;
`;

export const CardActions = styled.div`
  display: flex;
  gap: 44px;
  margin-top: 271px;
  margin-left: 7.5px;
`;

export const ActionButton = styled.button`
  width: 227px;
  min-height: 55px;
  border: 1px solid ${({ theme }) => theme.colors.accent};
  border-radius: 27.5px;
  color: ${({ theme }) => theme.colors.accent};
  background-color: ${({ theme }) => theme.colors.surface};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.surface};
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

export const GrowthIllustration = styled.img`
  display: block;
  width: 586px;
  height: auto;
  transform: translateY(-58px);
`;
