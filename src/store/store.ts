import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from '../features/theme/themeSlice';
import { loanApplicationReducer } from '../features/loan/loanApplicationSlice';


export const store = configureStore({
  reducer: {
    theme: themeReducer,
    loanApplication: loanApplicationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
