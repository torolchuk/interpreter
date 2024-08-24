export interface FormatData {
  type: Format,
  title: string,
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
  byteData?: ByteData;
}

export type AppHistory = AppHistoryEntry[];

export interface ByteInterpretation {
  enabled: boolean;
  byteData?: ByteData;
}

export type ByteData = Array<BitData>;

export interface BitData {
  label: string; 
}

