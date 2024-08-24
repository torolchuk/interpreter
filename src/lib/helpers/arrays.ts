export const merge = <T>(a: Array<T>, b: Array<T>): Array<T> => {
  const l = Math.max(a.length, b.length);
  const r = [];

  for (let i = 0; i < l; i += 1) {
    if (b[i]) {
      r[i] = b[i];
    } else if (a[i]) {
      r[i] = a[i];
    }
  }

  return r;
}
