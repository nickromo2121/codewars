// Given a string and an array of integers representing indices, capitalize all letters at the given indices.

//My solution
function capitalize(s,arr) {
    return s
      .split('')
      .map((char, index) => arr.includes(index) ? char.toUpperCase() : char)
      .join('');
  }