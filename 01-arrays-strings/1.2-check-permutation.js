// Given two strings, write a method to decide if one is a permutation of the other.

// permutations are strings with same length, characters in different orders
// approach: use hash map to store character count in each string

function isPermutation(str1, str2) {
  // check strings are same length
  if (str1.length !== str2.length) {
    return false;
  }

  // hash map
  const charCount = {};

  // count characters in both strings
  // increment count in str1; decrement count from str2
  for (let i = 0; i < str1.length; i++) {
    let char1 = str1[i];
    let char2 = str2[i];
    charCount[char1] = charCount[char1] ? charCount[char1] + 1 : 1;
    charCount[char2] = charCount[char2] ? charCount[char2] - 1 : -1;
  }

  // count should be 0 if all characters same
  for (let char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }
  return true;
}

// time complexity: O(n) -> loop through each character in both strings once, n = length of input string
// space complexity: O(1) -> size of charCount array is constant and independent of length of the input strings
