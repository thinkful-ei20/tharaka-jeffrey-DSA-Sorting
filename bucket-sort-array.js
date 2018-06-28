'use strict';

// swap function
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}

// will find the index of the wall
function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j); // switch i and j if the current value(array[i]) less than the pivot
      j++; // move the wall right
    }
  }
  swap(array, end - 1, j); // put the pivot to the left of the wall.
  return j; // Returns the index of the wall
}

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array; // if wall is equal or greater to the end index return the array because its already sorted
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end); // after everything if finished in the left side you come here for the right side
  return array;
}

// Implement bucket sort
function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Declaring vars
  var i,
    minValue = array[0],
    maxValue = array[0],
    bucketSize = bucketSize || 5;

  // Setting min and max values
  array.forEach(function (currentVal) {
    if (currentVal < minValue) {
      minValue = currentVal;
    } else if (currentVal > maxValue) {
      maxValue = currentVal;
    }
  });

  // Initializing buckets
  var bucketCount = Math.floor((maxValue - minValue) / bucketSize) + 1;
  var allBuckets = new Array(bucketCount);

  for (i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  // Pushing values to buckets
  array.forEach(function (currentVal) {
    allBuckets[Math.floor((currentVal - minValue) / bucketSize)].push(currentVal);
  });

  // Sorting buckets
  array.length = 0;

  allBuckets.forEach(function (bucket) {
    quickSort(bucket);
    bucket.forEach(function (element) {
      array.push(element);
    });
  });

  return array;
}


let data = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];
console.log(' Input: ', data);
bucketSort(data);
console.log('Output: ', data);
