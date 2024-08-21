import { writable, type Writable } from "svelte/store";
import { ErrorCode, Format, type AppHistory } from "$lib/types";
import { FORMATS } from "$lib/constants";

import { browser } from "$app/environment";

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

let initialStore: AppStore | undefined;

const LOCALSTORAGE_KEY = 'app-data';

try {
  console.log(browser);
  const cachedData = browser &&
    localStorage?.getItem(LOCALSTORAGE_KEY) || '';
  if (cachedData) {
    const data = JSON.parse(cachedData);
    const requiredKeys = new Set([
      "history", "preset"
    ]);
    const existingKeus = new Set(Object.keys(data));

    if (requiredKeys.isSubsetOf(existingKeus)) {
      initialStore = data;
    }
  }
} catch (err) {
  console.error("Parsing localstorage failed.", err);
} finally {
  if (!initialStore) {
    initialStore = { ...INITIAL_STORE };
  }
}

export const appStore: Writable<AppStore> =
  writable({ ...initialStore });

if (browser) {
  appStore.subscribe((state) => {
    localStorage?.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify(state),
    );
  });
}

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
  updateSettings: (data: Partial<Pick<AppStore, "preset">>) => {
    console.log(data);
    appStore.update((state) => ({
      ...state,
      preset: {
        ...state.preset,
        ...data,
      },
    }));
  },
};
