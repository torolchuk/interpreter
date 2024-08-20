export interface FormatData {
  type: Format,
  prefix: string,
  transformPrefix?: string;
  placeholder: string;
  code: number;
}

export enum Format {
  Decimal = "decimal",
  Hexadecimal = "hexadecimal",
  Binary = "binary",
}

export enum ErrorCode {
  None = 0,
  NaN = 1,
}

export interface PresetData {
  input: Format;
  output: Format;
}

export interface AppHistoryEntry {
  preset: PresetData;
  value: number;
}

export type AppHistory = AppHistoryEntry[];

