import { readonly, writable, type Writable } from "svelte/store";
import { ErrorCode, Format, type AppHistory, type ByteInterpretation } from "$lib/types";
import { FORMATS } from "$lib/constants";
import { interpretation } from "$lib/helpers";

import { browser } from "$app/environment";
import { LOCALSTORAGE_KEY } from "./consts";

export interface Transformation {
  input: Format;
  output: Format;
}

export interface AppStore {
  preset: Transformation,
  currentData?: number,
  error?: ErrorCode,
  history: AppHistory,
  interpretation: ByteInterpretation;
}

export const INITIAL_STORE: AppStore = {
  preset: {
    input: Format.Decimal,
    output: Format.Hexadecimal,
  },
  history: [],
  interpretation: {
    enabled: false,
    byteData: [],
  }
}

let initialStore: AppStore | undefined;

try {
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

const appStore: Writable<AppStore> =
  writable({ ...initialStore });

if (browser) {
  appStore.subscribe((state) => {
    localStorage?.setItem(
      LOCALSTORAGE_KEY,
      JSON.stringify(state),
    );
  });
}

export const read = readonly(appStore);

export const actions = {
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
          byteData: state.interpretation.enabled ?
            state.interpretation.byteData :
            undefined,
        },
      ],
    }));
  },
  clearHistory: () => {
    appStore.update((state) => ({
      ...state,
      history: [],
    }));
  },
  updateSettings: (data: Partial<Pick<AppStore, "preset">>) => {
    appStore.update((state) => ({
      ...state,
      preset: {
        ...state.preset,
        ...data,
      },
    }));
  },
  interpretation: {
    enable: () => {
      appStore.update((state) => ({
        ...state,
        interpretation: {
          ...state.interpretation,
          enabled: true,
        },
      }));
    },
    disable: () => {
      appStore.update((state) => ({
        ...state,
        interpretation: {
          ...state.interpretation,
          enabled: false,
        },
      }));
    },
    setBitLabel: (value: string, index: number) => {
      appStore.update((state) => ({
        ...state,
        interpretation: {
          ...state.interpretation,
          byteData: interpretation.updateBitData(
            state.interpretation.byteData ?? [],
            { label: value },
            index,
          ),
        },
      }));
    },
  }
};
