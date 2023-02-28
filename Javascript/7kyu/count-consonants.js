//Complete the function that takes a string of English-language text and returns the number of consonants in the string.

//My solution
function consonantCount(str) {
    return (str.match(/[b-df-hj-np-tv-z]/gi) || []).length;
  }