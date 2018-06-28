//swap function
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
};

//will find the index of the wall
function partition(array, start, end) {
    const pivot = array[end - 1];
    let j = start;
    for (let i=start; i<end - 1; i++) {
        if (array[i] <= pivot) {
            swap(array, i, j);//switch i and j if the current value(array[i]) less than the pivot
            j++;//move the wall right
        }
    }
    swap(array, end-1, j);//put the pivot to the left of the wall.
    return j;//Returns the index of the wall
};

function qSort(array, start=0, end=array.length) {
    start = start;
    end = end;
    if (start >= end) {
        return array;//if wall is equal or greater to the end index return the array because its already sorted
    }
    const middle = partition(array, start, end);
    array = qSort(array, start, middle);
    array = qSort(array, middle + 1, end);//after everything if finished in the left side you come here for the right side
    return array;
};


