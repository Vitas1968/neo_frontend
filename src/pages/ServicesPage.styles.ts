import styled from 'styled-components';

export const Page = styled.main`
  min-height: calc(100vh - 90px);
  background-color: #f7f7f7;
`;

export const Container = styled.div`
  width: min(calc(100% - 48px), 1368px);
  margin: 0 auto;
  padding: 56px 104px 80px;

  > h1 {
    margin: 0;
    color: #1f2937;
    font-size: 36px;
  }

  > p {
    margin: 12px 0 40px;
    color: #6b7280;
  }

  @media (max-width: 768px) {
    padding: 32px 24px;
  }
`;

export const Section = styled.section`
  margin: 32px 0;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 24px;
  color: #1f2937;
  font-size: 24px;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid #d7d7d7;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const Button = styled.button<{
  $variant?: 'secondary' | 'danger';
}>`
  padding: 12px 20px;
  border: 1px solid ${({ $variant }) => ($variant === 'secondary' ? '#202ed7' : 'transparent')};
  border-radius: 24px;
  color: ${({ $variant }) => ($variant === 'secondary' ? '#202ed7' : '#ffffff')};
  background-color: ${({ $variant }) => {
    if ($variant === 'secondary') return '#ffffff';
    if ($variant === 'danger') return '#d92d20';
    return '#202ed7';
  }};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

export const Tabs = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 24px;
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border: 0;
  border-radius: 18px;
  color: ${({ $active }) => ($active ? '#ffffff' : '#374151')};
  background-color: ${({ $active }) => ($active ? '#202ed7' : '#e5e7eb')};
  cursor: pointer;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
`;

export const Badge = styled.span`
  padding: 6px 10px;
  border-radius: 16px;
  color: #202ed7;
  background-color: #e7e9ff;
  font-size: 12px;
  font-weight: 600;
`;

export const Tag = styled.span`
  padding: 6px 10px;
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  color: #374151;
  background-color: #ffffff;
  font-size: 12px;
`;

export const Alert = styled.div`
  margin-top: 24px;
  padding: 16px;
  border-left: 4px solid #202ed7;
  border-radius: 8px;
  color: #1f2937;
  background-color: #e7e9ff;
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 20px;
`;

export const FieldLabel = styled.label`
  color: #374151;
  font-size: 14px;
  font-weight: 600;
`;

export const Label = FieldLabel;

const controlStyles = `
  width: 100%;
  padding: 12px 16px;
  border: 1px solid #d7d7d7;
  border-radius: 8px;
  outline: none;
  color: #1f2937;
  background-color: #ffffff;
  font: inherit;

  &:focus {
    border-color: #202ed7;
  }
`;

export const Input = styled.input`
  ${controlStyles}
`;

export const Select = styled.select`
  ${controlStyles}
`;

export const Textarea = styled.textarea`
  ${controlStyles}
  resize: vertical;
`;

export const HelperText = styled.span`
  color: #6b7280;
  font-size: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  margin-top: 24px;
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: #202ed7;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 16px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  cursor: pointer;
`;

export const Radio = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: #202ed7;
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  cursor: pointer;
`;

export const Switch = styled.input`
  width: 38px;
  height: 20px;
  margin: 0;
  accent-color: #202ed7;
`;

export const Slider = styled.input`
  width: 260px;
  accent-color: #202ed7;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  padding: 24px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgb(0 0 0 / 8%);

  h2 {
    margin: 0 0 16px;
    color: #374151;
    font-size: 16px;
  }

  strong {
    color: #1f2937;
    font-size: 28px;
  }

  p {
    margin: 12px 0 0;
    color: #6b7280;
  }
`;

export const Progress = styled.div`
  height: 12px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #e5e7eb;
`;

export const ProgressBar = styled.div`
  width: 60%;
  height: 100%;
  border-radius: inherit;
  background-color: #202ed7;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 24px;
  border-collapse: collapse;
  overflow: hidden;
  border-radius: 12px;
  background-color: #ffffff;

  th,
  td {
    padding: 16px;
    border-bottom: 1px solid #e5e7eb;
    text-align: left;
  }

  th {
    color: #6b7280;
    font-size: 12px;
  }

  td {
    color: #374151;
    font-size: 14px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 24px;
  background-color: rgb(0 0 0 / 45%);
`;

export const Modal = styled.div`
  width: min(100%, 420px);
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 20px 40px rgb(0 0 0 / 20%);
`;

export const ModalContent = styled.div`
  padding: 32px;

  h2 {
    margin: 0;
    color: #1f2937;
  }

  p {
    margin: 16px 0 24px;
    color: #6b7280;
  }
`;
