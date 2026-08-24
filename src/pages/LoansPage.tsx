import { useEffect, useState, type FormEvent } from 'react';
import { LoanSuccessModal } from '../components/loan-success-modal/LoanSuccessModal';
import {
  LOAN_APPLICATION_STORAGE_KEY,
  type LoanConsentField,
  type LoanTextField,
  selectLoanApplication,
  setLoanConsent,
  setLoanTextField,
} from '../features/loan/loanApplicationSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';
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
  const dispatch = useAppDispatch();
  const loanApplication = useAppSelector(selectLoanApplication);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem(LOAN_APPLICATION_STORAGE_KEY, JSON.stringify(loanApplication));
  }, [loanApplication]);

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

  function handleTextFieldChange(field: LoanTextField, value: string) {
    dispatch(setLoanTextField({ field, value }));
  }

  function handleConsentChange(field: LoanConsentField, value: boolean) {
    dispatch(setLoanConsent({ field, value }));
  }

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
              value={loanApplication.amount}
              onChange={(event) => handleTextFieldChange('amount', event.target.value)}
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
              value={loanApplication.term}
              onChange={(event) => handleTextFieldChange('term', event.target.value)}
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
              value={loanApplication.income}
              onChange={(event) => handleTextFieldChange('income', event.target.value)}
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
              value={loanApplication.address}
              onChange={(event) => handleTextFieldChange('address', event.target.value)}
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
              value={loanApplication.workplace}
              onChange={(event) => handleTextFieldChange('workplace', event.target.value)}
            />
            <ErrorText>* обязательное поле для заполнения</ErrorText>
          </Field>

          <ConsentGroup>
            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="personalDataConsent"
                required
                checked={loanApplication.personalDataConsent}
                onChange={(event) =>
                  handleConsentChange('personalDataConsent', event.target.checked)
                }
              />
              Согласен на обработку персональных данных
              <RequiredMark>*</RequiredMark>
            </CheckboxLabel>

            <CheckboxLabel>
              <Checkbox
                type="checkbox"
                name="mailingConsent"
                checked={loanApplication.mailingConsent}
                onChange={(event) => handleConsentChange('mailingConsent', event.target.checked)}
              />
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
