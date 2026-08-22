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
  background-color: ${({ theme }) => theme.colors.pageBackground};
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
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 16px;
  font-weight: 600;
  line-height: 18px;
`;

export const RequiredMark = styled.span`
  margin-left: 2px;
  color: ${({ theme }) => theme.colors.danger};
`;

export const TextInput = styled.input`
  width: 429px;
  height: 37px;
  padding: 0 20px 0 39px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 20px;
  outline: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.surface};
  font-size: 16px;
  font-weight: 600;

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.focus};
  }
`;

export const ErrorText = styled.span`
  margin-top: -2px;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 10px;
  font-weight: 600;
  line-height: 12px;
`;

export const ConsentGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.m};
  margin-top: 3px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: ${({ theme }) => theme.colors.focus};
`;

export const SubmitButton = styled.button`
  width: 149px;
  height: 49px;
  margin-top: 70px;
  border: 0;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.surface};
  background-color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;
