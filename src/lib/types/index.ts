export enum Format {
  Decimal = "decimal",
  Hexadecimal = "hexadecimal",
  Binary = "binary",
}

export interface PresetData {
  input: Format,
  output: Format,
}

