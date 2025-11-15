export const toList = (input: string, separator: string = ",") =>
  input ? input.split(separator).map((item) => item.trim()) : [];
