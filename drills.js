"use strict";

//=== 5. URLify a string ===//
/* A common mistake users make when they type in an URL is to put spaces between words or letters. 
A solution that developers can use to solve this problem is to replace any spaces with a %20. 
Write a method that takes in a string and replaces all its empty spaces with a %20. 
Your algorithm can only make 1 pass through the string. 
Examples of input and output for this problem can be 
Input: tauhida parveen
Output: tauhida%20parveen
Input: www.thinkful.com /tauh ida parv een
Output: www.thinkful.com%20/tauh%20ida%20parv%20een */

function urlify(url) {
  // The split() method is used to split a string into an array of substrings,
  // and returns the new array.

  return url.split(" ").join("%20");
  // .join converts the elements of an array into a string
}

console.log(urlify("www.thinkful.com /tauh ida parv een"));
// Output: www.thinkful.com%20/tauh%20ida%20parv%20een

//=== 6. Filtering an array ===//

/*
Imagine you have an array of numbers.  
Write an algorithm to remove all numbers less than 5 from the array. 
DO NOT use Array's built-in .filter() method here; write the algorithm from scratch. */

function filterArray(arr, filt) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= filt) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}
console.log(filterArray([1, 2, 3, 4, 5, 6, 7, 8], 5));

//=== 7. Max sum in the array ===//

/*
You are given an array containing positive and negative integers. 
Write an algorithm which will find the largest sum in a continuous sequence.
Input: [4, 6, -3, 5, -2, 1]
Output: 12 */
function maxSum(arr) {
  let currentSum = 0;
  let largestSum = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    if (currentSum > currentSum + arr[i + 1]) {
      largestSum = currentSum;
    }
  }
  return largestSum;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

//=== 8. Merge arrays ===//

/*
Imagine you have 2 arrays which have already been sorted. Write an algorithm to merge the 2 arrays into a single array, which should also be sorted. 
Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11] */

function mergeArrays(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    newArr.push(arr1[i]);
  }
  for (let i = 0; i < arr2.length; i++) {
    newArr.push(arr2[i]);
  }

  return newArr.sort((a, b) => a - b);
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));

//=== 9. Remove Characters ===//

/*
Write an algorithm that deletes given characters from a string. For example, 
given a string of "Battle of the Vowels: Hawaii vs. Grozny" and the 
characters to be removed are "aeiou", the algorithm should transform the 
original string to "Bttl f th Vwls: Hw vs. Grzny". Do not use Javascript's 
filter, split, or join methods.
Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny' */
const sentence = "Battle of the Vowels: Hawaii vs. Grozny";
const vowels = ["a", "e", "i", "o", "u"];
function removeChar(sentence, vowels) {
  let newString = "";
  for (let i = 0; i < sentence.length; i++) {
    if (!vowels.includes(sentence[i])) {
      newString += sentence[i];
    }
  }
  return newString;
}
console.log(removeChar(sentence, vowels));

// OR ALTERNATIVELY
function removeChar(string, letters) {
  const letterArr = [];
  const stringArr = [];

  for (let i = 0; i < letters.length; i++) {
    letterArr.push(letters.charAt(i));
  }
  for (let i = 0; i < string.length; i++) {
    stringArr.push(string.charAt(i));
  }

  letterArr.forEach((letter) => {
    stringArr.forEach((strLtr, index) => {
      if (letter === strLtr) {
        stringArr.splice(index, 1);
      }
    });
  });

  const concatString = stringArr.reduce((acc, curr) => {
    return acc + curr;
  });

  return concatString;
}

removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou");

//=== 10. Products ===//

/*
Given an array of numbers, write an algorithm that outputs an 
array where each index is the product of all the numbers in the 
input array except for the number at each current index. See the 
following example input and output.
Input:[1, 3, 9, 4] 
Output:[108, 36, 12, 27] */

function products(arr) {
  let newArr = [];
  let value = 1;

  for (let i = 0; i < arr.length; i++) {
    value = value * arr[i];
    // newArr.push(value / arr[i]);
  }

  for (let j = 0; j < arr.length; j++) {
    newArr.push(value / arr[j]);
  }
  return newArr;
}

products([1, 3, 9, 4]);

//=== 11. 2D array ===//

/*
Write an algorithm which searches through a 2D array, and whenever it finds a 0 should set the entire row and column to 0.
Input: 
[[1,0,1,1,0],
[0,1,1,1,0],
[1,1,1,1,1],
[1,0,1,1,1],
[1,1,1,1,1]];
Output:
[[0,0,0,0,0],
[0,0,0,0,0],
[0,0,1,1,0],
[0,0,0,0,0],
[0,0,1,1,0]]; */

let twoD = [
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
];

function twoDArray(arr) {
  const oneArray = [];
  const twoArray = [];
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === 0) {
        oneArray[i] = true;
        twoArray[j] = true;
      }
    }
  }
  for (let i = 0; i < arr.length; i++) {
    let row = arr[i];
    for (let j = 0; j < row.length; j++) {
      if (oneArray[i] || twoArray[j]) {
        row[j] = 0;
      }
    }
  }
  return arr;
}
console.log(twoDArray(twoD));

//=== 12. String rotation ===//

/*
Given 2 strings, str1 and str2, write a program that checks if str2 is a rotation of str1.
Input: amazon, azonma
Output: False
Input: amazon, azonam
Output: true */

function rotation(str1, str2) {
  return (str1 + str1).includes(str2);
}
console.log(rotation("amazon", "azonma"));
