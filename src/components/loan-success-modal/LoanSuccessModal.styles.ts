import styled from 'styled-components';

export const ModalPanel = styled.section`
  position: absolute;
  top: 147px;
  left: 418px;
  z-index: 1;
  display: flex;
  align-items: center;
  width: 622px;
  height: 224px;
  padding: 0 55px;
  border: 1px solid #1521cf;
  border-radius: 65px;
  background-color: #ffffff;
`;

export const SuccessIcon = styled.span`
  position: relative;
  flex: 0 0 auto;
  width: 68px;
  height: 68px;
  border: 5px solid #5d61dc;
  border-radius: 50%;

  &::after {
    position: absolute;
    top: 20px;
    left: 21px;
    width: 20px;
    height: 11px;
    border-right: 5px solid #5d61dc;
    border-bottom: 5px solid #5d61dc;
    content: '';
    transform: rotate(45deg);
  }
`;

export const TextContent = styled.div`
  margin-left: 38px;
  color: #1521cf;
`;

export const Title = styled.p`
  margin: 0 0 5px;
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
`;

export const Message = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  line-height: 23px;
`;
