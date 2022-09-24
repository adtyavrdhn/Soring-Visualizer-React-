import { delay, swap } from "./utility";

async function partition(
  items: number[],
  left: number,
  right: number,
  setArr: Function
) {
  console.log("Quick Sort");
  var pivot = items[Math.floor((right + left) / 2)],
    i = left,
    j = right;
  while (i <= j) {
    while (items[i] < pivot) {
      i++;
    }
    while (items[j] > pivot) {
      j--;
    }
    if (i <= j) {
      swap(items, i, j);
      setArr([...items]);
      i++;
      j--;
    }
  }
  return i;
}

export default async function quickSort(
  arr: number[],
  left: number,
  right: number,
  setArr: Function
) {
  var index;

  let items: number[] = arr;
  if (items.length > 1) {
    await delay(5);
    index = await partition(items, left, right, setArr);
    if (left < index - 1) {
      await quickSort(items, left, index - 1, setArr);
    }
    if (index < right) {
      await quickSort(items, index, right, setArr);
    }
  }

  arr = [...items];
  return arr;
}
