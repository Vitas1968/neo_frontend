import { Message, ModalPanel, SuccessIcon, TextContent, Title } from './LoanSuccessModal.styles';

type LoanSuccessModalProps = {
  isOpen: boolean;
};

export function LoanSuccessModal({ isOpen }: LoanSuccessModalProps) {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalPanel role="status" aria-live="polite">
      <SuccessIcon aria-hidden="true" />

      <TextContent>
        <Title>Заявка оформлена</Title>
        <Message>
          Банк рассмотрит заявление в течении 1<br />
          рабочего дня
        </Message>
      </TextContent>
    </ModalPanel>
  );
}
