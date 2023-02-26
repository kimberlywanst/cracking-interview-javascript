// Question: Implement an algorithm to determine if a string has all unique characters.

/*
approach:
- iterate over string, set 'true' for each character
- return 'false' if any character is 'true'
*/

// assume ASCII string with 256 unique characters
let MAX_CHAR = 256;

function isUnique(str) {
  // duplicate characters in string
  if (str.length > MAX_CHAR) return false;

  // create array with max char
  let chars = new Array(MAX_CHAR);

  // keep track of characters in string
  for (let i = 0; i < str.length; i++) {
    let value = str.charAt(i); // return character at index i

    // duplicate character exist
    if (chars[value]) return false;
    chars[value] = true;
  }
  // all unique characters in string
  return true;
}

// time complexity: 0(N) -> loop through entire length of string
// space complexity: O(1)
