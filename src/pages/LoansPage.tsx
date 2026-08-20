import { useEffect, useState, type FormEvent } from 'react';
import { LoanSuccessModal } from '../components/loan-success-modal/LoanSuccessModal';
import {
  Checkbox,
  CheckboxLabel,
  ConsentGroup,
  ErrorText,
  Field,
  FieldLabel,
  Form,
  LoanContent,
  Page,
  RequiredMark,
  SubmitButton,
  TextInput,
} from './LoansPage.styles';

export function LoansPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setIsModalOpen(false);
    }, 10_000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isModalOpen]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsModalOpen(true);
  }

  return (
    <Page>
      <LoanContent>
        <Form onSubmit={handleSubmit}>
          <Field>
            <FieldLabel htmlFor="amount">
              Сумма<RequiredMark>*</RequiredMark>
            </FieldLabel>
            <TextInput
              id="amount"
              name="amount"
              type="number"
              placeholder="Введите сумму"
              min="1"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="term">
              Срок<RequiredMark>*</RequiredMark>
            </FieldLabel>
            <TextInput
              id="term"
              name="term"
              type="number"
              placeholder="Введите срок"
              min="1"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="income">
              Ежемесячный доход<RequiredMark>*</RequiredMark>
            </FieldLabel>
            <TextInput
              id="income"
              name="income"
              type="number"
              placeholder="Введите доход"
              min="1"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="address">
              Адрес регистрации<RequiredMark>*</RequiredMark>
            </FieldLabel>
            <TextInput
              id="address"
              name="address"
              type="text"
              placeholder="Введите адрес"
              required
            />
          </Field>

          <Field>
            <FieldLabel htmlFor="workplace">
              Место работы<RequiredMark>*</RequiredMark>
            </FieldLabel>
            <TextInput
              id="workplace"
              name="workplace"
              type="text"
              placeholder="Введите наименование организации"
              required
            />
            <ErrorText>* обязательное поле для заполнения</ErrorText>
          </Field>

          <ConsentGroup>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="personalDataConsent"
                defaultChecked
                required
              />
              Согласен на обработку персональных данных
              <RequiredMark>*</RequiredMark>
            </CheckboxLabel>

            <CheckboxLabel>
              <Checkbox type="checkbox" name="mailingConsent" />
              Согласен на рассылку
            </CheckboxLabel>
          </ConsentGroup>

          <SubmitButton type="submit">Оформить</SubmitButton>
        </Form>

        <LoanSuccessModal isOpen={isModalOpen} />
      </LoanContent>
    </Page>
  );
}