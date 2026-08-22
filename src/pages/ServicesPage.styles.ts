import styled, { css } from 'styled-components';

export const Page = styled.main`
  min-height: calc(100vh - 90px);
  background-color: ${({ theme }) => theme.colors.pageBackground};
`;

export const Container = styled.div`
  width: min(calc(100% - 48px), 1368px);
  margin: 0 auto;
  padding: 56px 104px 80px;

  > h1 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 36px;
  }

  > p {
    margin: 12px 0 40px;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 32px 24px;
  }
`;

export const Section = styled.section`
  margin: ${({ theme }) => theme.spacing.xxl} 0;
`;

export const SectionTitle = styled.h2`
  margin: 0 0 ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 24px;
`;

export const Divider = styled.hr`
  border: 0;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.m};
`;

export const Button = styled.button<{
  $variant?: 'secondary' | 'danger';
}>`
  padding: 12px 20px;
  border: 1px solid
    ${({ $variant, theme }) => ($variant === 'secondary' ? theme.colors.primary : 'transparent')};
  border-radius: 24px;
  color: ${({ $variant, theme }) =>
    $variant === 'secondary' ? theme.colors.primary : theme.colors.surface};
  background-color: ${({ $variant, theme }) => {
    if ($variant === 'secondary') return theme.colors.surface;
    if ($variant === 'danger') return theme.colors.dangerStrong;

    return theme.colors.primary;
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
  gap: ${({ theme }) => theme.spacing.s};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Tab = styled.button<{ $active: boolean }>`
  padding: 8px 16px;
  border: 0;
  border-radius: 18px;
  color: ${({ $active, theme }) => ($active ? theme.colors.surface : theme.colors.textContent)};
  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.primary : theme.colors.surfaceMuted};
  cursor: pointer;
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.s};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const Badge = styled.span`
  padding: 6px 10px;
  border-radius: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.surfaceAccent};
  font-size: 12px;
  font-weight: 600;
`;

export const Tag = styled.span`
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.spacing.l};
  color: ${({ theme }) => theme.colors.textContent};
  background-color: ${({ theme }) => theme.colors.surface};
  font-size: 12px;
`;

export const Alert = styled.div`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => theme.spacing.l};
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.s};
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.surfaceAccent};
`;

export const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.s};
  margin-top: 20px;
`;

export const FieldLabel = styled.label`
  color: ${({ theme }) => theme.colors.textContent};
  font-size: 14px;
  font-weight: 600;
`;

export const Label = FieldLabel;

const controlStyles = css`
  width: 100%;
  padding: 12px 16px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.s};
  outline: none;
  color: ${({ theme }) => theme.colors.textPrimary};
  background-color: ${({ theme }) => theme.colors.surface};
  font: inherit;

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
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
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 12px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xl};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.textContent};
  cursor: pointer;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.l};
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.textContent};
  cursor: pointer;
`;

export const Radio = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const SwitchLabel = styled.label`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.textContent};
  cursor: pointer;
`;

export const Switch = styled.input`
  width: 38px;
  height: 20px;
  margin: 0;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const Slider = styled.input`
  width: 260px;
  accent-color: ${({ theme }) => theme.colors.primary};
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.l};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.card};

  h2 {
    margin: 0 0 ${({ theme }) => theme.spacing.l};
    color: ${({ theme }) => theme.colors.textContent};
    font-size: 16px;
  }

  strong {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: 28px;
  }

  p {
    margin: ${({ theme }) => theme.spacing.m} 0 0;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const Progress = styled.div`
  height: 12px;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.s};
  background-color: ${({ theme }) => theme.colors.surfaceMuted};
`;

export const ProgressBar = styled.div`
  width: 60%;
  height: 100%;
  border-radius: inherit;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Table = styled.table`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing.xl};
  border-collapse: collapse;
  overflow: hidden;
  border-radius: ${({ theme }) => theme.radius.m};
  background-color: ${({ theme }) => theme.colors.surface};

  th,
  td {
    padding: ${({ theme }) => theme.spacing.l};
    border-bottom: 1px solid ${({ theme }) => theme.colors.surfaceMuted};
    text-align: left;
  }

  th {
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
  }

  td {
    color: ${({ theme }) => theme.colors.textContent};
    font-size: 14px;
  }
`;

export const ModalBackdrop = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  display: grid;
  place-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  background-color: rgb(0 0 0 / 45%);
`;

export const Modal = styled.div`
  width: min(100%, 420px);
  border-radius: ${({ theme }) => theme.radius.l};
  background-color: ${({ theme }) => theme.colors.surface};
  box-shadow: ${({ theme }) => theme.shadows.modal};
`;

export const ModalContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xxl};

  h2 {
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  p {
    margin: ${({ theme }) => theme.spacing.l} 0 ${({ theme }) => theme.spacing.xl};
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;
