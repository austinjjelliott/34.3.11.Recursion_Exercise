/** product: calculate the product of an array of numbers. */

function product(nums, idx = 0) {
  //base case
  if (idx === nums.length) return 1;
  // normal case
  return nums[idx] * product(nums, idx + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  // Base case: if the array is empty, return 0. This means we sliced it all out
  if (words.length === 0) {
    return 0;
  }

  // Get the length of the first word
  const firstWordLength = words[0].length;

  // Recursion: compare the length of the first word with the longest length of the rest of the array
  const longestInRest = longest(words.slice(1));

  // Return the maximum length found
  return Math.max(firstWordLength, longestInRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, idx = 0, newStr = "") {
  // base case
  if (idx >= str.length) return newStr;

  newStr += str[idx];
  return everyOther(str, idx + 2, newStr);
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str, idx = 0) {
  let leftidx = idx;
  let rightidx = str.length - idx - 1;
  if (leftidx >= rightidx) return true; //This means the function has run its course and returned yes, it is a palindrome (got this far without returning a false). base case.
  if (str[leftidx] !== str[rightidx]) return false; //this will run if NOT a palindrome
  return isPalindrome(str, idx + 1);
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, idx = 0) {
  //base case:
  if (idx === arr.length) return -1;
  //recursion and desired outcome
  if (arr[idx] === val) return idx;
  return findIndex(arr, val, idx + 1);
}

/** revString: return a copy of a string, but in reverse. */

function revString(str, idx = 0, newStr = "") {
  //basecase
  if (newStr.length === str.length) return newStr;
  //recursion
  newStr += str[str.length - 1 - idx];
  return revString(str, idx + 1, newStr);
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = [];
  for (const key in obj) {
    if (typeof obj[key] === "string") {
      result.push(obj[key]);
    } else if (typeof obj[key] === "object" && obj[key] != null) {
      result.push(...gatherStrings(obj[key]));
    }
  }
  return result;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right = arr.length) {
  //base case / value is not present
  if (left > right) return -1;
  let middle = Math.floor((right + left) / 2);
  if (arr[middle] === val) {
    return middle;
  }
  if (arr[middle] > val) {
    return binarySearch(arr, val, (left = 0), (right = middle - 1));
  } else {
    return binarySearch(arr, val, (left = middle + 1), right);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch,
};
