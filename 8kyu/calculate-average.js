// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

//My solution

function findAverage(array) {
    let sumArray = array.reduce((acc,current) => acc + current, 0)
    return array.length ? sumArray/array.length : 0;
  }