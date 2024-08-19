import { Format } from "$lib/types";

export const FORMAT_PREFIXES: Record<Format, string> = {
  [Format.Decimal]: "0d",
  [Format.Hexadecimal]: "0x",
  [Format.Binary]: "0b",
};

export const FORMAT_PLACEHOLDERS: Record<Format, string> = {
  [Format.Decimal]: "0000",
  [Format.Hexadecimal]: "0000",
  [Format.Binary]: "0000",
}
