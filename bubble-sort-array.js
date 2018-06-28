/* BUBBLE SORT - worst
iterate array and compare adjacent values.
swap values if left greater than right.
call sort again if a swap has occurred, otherwise sort complete

input   1, 3, 4, 2, 6, 5
output  1, 2, 3, 4, 5, 6

Best: O(n) - array is already in order
Worst: O(n^2) - every value has to be swapped
Avg: O(n^2)

*/

'use strict';

// takes original array and swaps items
function swap(array, i, j) {
  let temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function bubbleSort(array) {
  // track if a swap has occurred
  let swapped = false;
  // iterate array to the end - 1 since last item will have nothing to compare
  for (let i = 0; i < array.length - 1; i++) {
    // if left value is greater than right value, swap and set swapped flag to true
    if (array[i] > array[i + 1]) {
      swap(array, i, i + 1);
      swapped = true;
    }
  }

  // call sort again if swap occurred, otherwise sort completed
  return (swapped ? bubbleSort(array) : array);
}

let data = [1, 3, 4, 2, 6, 5];
bubbleSort(data);

console.log('Sorted:', data); // eslint-disable-line no-console
