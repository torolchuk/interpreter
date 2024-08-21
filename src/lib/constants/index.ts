import { Format, type FormatData, ErrorCode } from "$lib/types";

export const FORMATS: Record<Format, FormatData> = {
  [Format.Decimal]: {
    type: Format.Decimal,
    title: "Decimal",
    prefix: "0d",
    placeholder: "0000",
    code: 10,
  },
  [Format.Hexadecimal]: {
    type: Format.Hexadecimal,
    title: "Hexadecimal",
    prefix: "0x",
    transformPrefix: "0x",
    placeholder: "0000",
    code: 16,
  },
  [Format.Binary]: {
    type: Format.Binary,
    title: "Binary",
    prefix: "0b",
    transformPrefix: "0b",
    placeholder: "0000",
    code: 2,
  },
}

export const ERROR_MESSAGES: Partial<Record<ErrorCode, string>> = {
  [ErrorCode.NaN]: "Wrong number.",
};

