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
  padding: 30px 28px;
  overflow: hidden;
  border-radius: 30px;
  color: #ffffff;
  background: linear-gradient(135deg, #8727f5 0%, #413cf1 100%);
  box-shadow: 0 18px 34px rgba(79, 58, 241, 0.2);

  &::before {
    position: absolute;
    top: -115px;
    right: -50px;
    width: 270px;
    height: 270px;
    border-radius: 50%;
    background: rgba(209, 77, 255, 0.32);
    content: '';
  }
`;

export const CardLabel = styled.p`
  position: relative;
  margin: 0;
  font-size: 14px;
  opacity: 0.85;
`;

export const Balance = styled.p`
  position: relative;
  margin: 12px 0 0;
  font-size: 34px;
  font-style: italic;
  font-weight: 700;
`;

export const CardNumber = styled.p`
  position: absolute;
  bottom: 28px;
  left: 28px;
  margin: 0;
  font-size: 13px;
  letter-spacing: 1px;
`;

export const CardDate = styled.p`
  position: absolute;
  right: 28px;
  bottom: 28px;
  margin: 0;
  font-size: 13px;
`;

export const PaymentSystem = styled.div`
  position: absolute;
  top: 30px;
  right: 28px;
  display: flex;
`;

export const PaymentCircle = styled.span<{ $color: string }>`
  display: block;
  width: 38px;
  height: 38px;
  margin-left: -11px;
  border-radius: 50%;
  background-color: ${({ $color }) => $color};

  &:first-child {
    margin-left: 0;
  }
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
  border: 1px solid #2949ee;
  border-radius: 27.5px;
  color: #2949ee;
  background-color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    color: #ffffff;
    background-color: #2949ee;
  }
`;

export const GrowthIllustration = styled.img`
  display: block;
  width: 586px;
  height: auto;
  transform: translateY(-58px);
`;
