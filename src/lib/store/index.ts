import { writable, type Writable } from "svelte/store";
import { ErrorCode, Format, type AppHistory } from "$lib/types";
import { FORMATS } from "$lib/constants";

export interface Transformation {
  input: Format;
  output: Format;
}

export interface AppStore {
  preset: Transformation,
  currentData?: number,
  error?: ErrorCode,
  history: AppHistory,
}

export const INITIAL_STORE: AppStore = {
  preset: {
    input: Format.Decimal,
    output: Format.Hexadecimal,
  },
  history: [],
}

export const appStore: Writable<AppStore> =
  writable({ ...INITIAL_STORE });

export const storeActions = {
  updateCurrentValue: (value: number) => {
    appStore.update((state) => {
      const inputFormat = state.preset.input;
      const prefix = FORMATS[inputFormat].transformPrefix ?? '';
      const normalizedNumber = Number(prefix + value);
      const error = isNaN(normalizedNumber) ? ErrorCode.NaN : ErrorCode.None;

      return {
        ...state,
        currentData: normalizedNumber,
        error,
      };
    });
  },
  saveToHistory: () => {
    appStore.update((state) => ({
      ...state,
      history: [
        ...state.history,
        {
          preset: { ...state.preset },
          value: state.currentData as number,
        },
      ],
    }));
  },
};
