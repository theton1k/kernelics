import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { getUnixTime } from 'date-fns';

export type LoginForm = {
  email: string;
  password: string;
};

export type RegistrationForm = {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
  birthDay: number | null;
  'T&C': boolean;
  ads: boolean;
};

type FormDataState = {
  login: LoginForm;
  registration: RegistrationForm;
};

const initialState: FormDataState = {
  login: {
    email: '',
    password: '',
  },
  registration: {
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
    birthDay: null,
    'T&C': false,
    ads: false,
  },
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setLoginForm: (state, action: PayloadAction<LoginForm>) => {
      state.login = action.payload;
    },
    setRegistrationForm: (
      state,
      action: PayloadAction<Required<RegistrationForm>>,
    ) => {
      const birthDay = action.payload.birthDay;

      state.registration = action.payload;

      if (birthDay) {
        state.registration.birthDay = getUnixTime(birthDay);
      }
    },
  },
});

export const { actions: formActions, reducer: formReducer } = counterSlice;
