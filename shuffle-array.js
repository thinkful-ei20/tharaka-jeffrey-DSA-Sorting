/* SHUFFLE ARRAY
randomize the values in an array in-place

input: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
output: 2, 5, 7, ...

All: O(n);

*/

'use strict';

// iterate array
// generate random number from 0 to array length
// swap values

function shuffleArray(array) {
  if(array.length > 1) {
    for (let i = 0; i < array.length; i++) {
      let rand = Math.floor(Math.random() * array.length);
      let temp = array[i];
      array[i] = array[rand];
      array[rand] = temp;
    }
  } 

  return array;
}

let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(data);
shuffleArray(data);
console.log(data);
