import styled from 'styled-components';

export const Page = styled.main`
  width: min(calc(100% - 48px), 1368px);
  min-height: 813px;
  margin: 0 auto;
`;

export const LoanContent = styled.section`
  position: relative;
  width: calc(100% - 17px);
  min-height: 813px;
  background-color: #f7f7f7;
`;

export const Form = styled.form`
  display: flex;
  width: 429px;
  flex-direction: column;
  padding: 63px 0 40px 104px;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 35px;
`;

export const FieldLabel = styled.label`
  color: #dedddd;
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
`;

export const RequiredMark = styled.span`
  margin-left: 2px;
  color: #ff0000;
`;

export const TextInput = styled.input`
  width: 429px;
  height: 37px;
  padding: 0 20px 0 39px;
  border: 1px solid #d7d7d7;
  border-radius: 20px;
  outline: none;
  color: #1f2937;
  background-color: #ffffff;
  font-size: 16px;
  font-weight: 600;

  &::placeholder {
    color: #dedddd;
  }

  &:focus {
    border-color: #0138f9;
  }
`;

export const ErrorText = styled.span`
  margin-top: -2px;
  color: #ff0000;
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

export const ConsentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 3px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dedddd;
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: #0138f9;
`;

export const SubmitButton = styled.button`
  width: 149px;
  height: 49px;
  margin-top: 70px;
  border: 0;
  border-radius: 25px;
  color: #ffffff;
  background-color: #202ed7;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #1521cf;
  }
`;
