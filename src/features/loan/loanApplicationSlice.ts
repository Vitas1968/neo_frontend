import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store/store';

export type LoanApplicationState = {
  amount: string;
  term: string;
  income: string;
  address: string;
  workplace: string;
  personalDataConsent: boolean;
  mailingConsent: boolean;
};

export type LoanTextField = 'amount' | 'term' | 'income' | 'address' | 'workplace';

export type LoanConsentField = 'personalDataConsent' | 'mailingConsent';

export const LOAN_APPLICATION_STORAGE_KEY = 'loan-application';

const defaultState: LoanApplicationState = {
  amount: '',
  term: '',
  income: '',
  address: '',
  workplace: '',
  personalDataConsent: true,
  mailingConsent: false,
};

function isLoanApplicationState(value: unknown): value is LoanApplicationState {
  if (typeof value !== 'object' || value === null) {
    return false;
  }

  const form = value as Record<string, unknown>;

  return (
    typeof form.amount === 'string' &&
    typeof form.term === 'string' &&
    typeof form.income === 'string' &&
    typeof form.address === 'string' &&
    typeof form.workplace === 'string' &&
    typeof form.personalDataConsent === 'boolean' &&
    typeof form.mailingConsent === 'boolean'
  );
}

function getInitialState(): LoanApplicationState {
  const storedForm = localStorage.getItem(LOAN_APPLICATION_STORAGE_KEY);

  if (!storedForm) {
    return defaultState;
  }

  try {
    const parsedForm: unknown = JSON.parse(storedForm);

    return isLoanApplicationState(parsedForm) ? parsedForm : defaultState;
  } catch {
    return defaultState;
  }
}

const loanApplicationSlice = createSlice({
  name: 'loanApplication',
  initialState: getInitialState(),
  reducers: {
    setLoanTextField(state, action: PayloadAction<{ field: LoanTextField; value: string }>) {
      state[action.payload.field] = action.payload.value;
    },

    setLoanConsent(state, action: PayloadAction<{ field: LoanConsentField; value: boolean }>) {
      state[action.payload.field] = action.payload.value;
    },
  },
});

export const { setLoanTextField, setLoanConsent } = loanApplicationSlice.actions;

export const loanApplicationReducer = loanApplicationSlice.reducer;

export const selectLoanApplication = (state: RootState) => state.loanApplication;
