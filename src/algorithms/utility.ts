export function swap(arr: any, i: number, j: number) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
