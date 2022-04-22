// Step One (Understand). We have to understand the problem.
// 1. What is the unknown?
//array of numbers that equal to target
// 2. What are the data inputs?
//array of nums
// 3. Can you restate the problem in your own words?
//addition of any 2 numbers that equal target
// 4. Can the unknown be determined from the data inputs?
//yes
// 5. Is the data inputs sufficient to determine the unknown? Insufficient? Redundant? Contradictory?
//yes
// 6. How should I label important pieces of data input that are a part of the problem?
//arr, target
// 7. Draw a figure. Introduce suitable notation.

// Step Two (Plan). Come up with concrete examples to help you understand the problem better. Find a connection between the data inputs and the unknown. You may be obliged to consider auxiliary problems if an immediate connection cannot be found.
// 9.  Have you seen it before? Or have you seen the same problem in a slightly different form? Do you know a related problem?
//yes, but without negative numbers.
// 10.   Do you know a coding strategy that could be useful? Look at the unknown! And try to think of a familiar problem having the same or a similar unknown. Here is a problem related to yours and solve before. Could you use it? Could you use its result? Could you use its method?
// 11.    Should you introduce some auxiliary element in order to make its use possible?
// 12. Start with a simple example. Could you restate the problem? Could you restate it still differently?
//arr=[1,2,3,-4,10] target=6 //output=[-4,10]
// 13. What about examples with empty inputs? Any other edge case examples? What examples with invalid inputs?
//empty array if empty input
// 15. If you still cannot solve the proposed problem, try to solve first some related problem. Could you imagine a more accessible related problem? A more general problem?

//1 O(N^2)
function sum(arr, target) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        result.push(arr[i], arr[j]);
      }
    }
  }
  return result;
}

//console.log(sum([3, 5, -4, 8, 11, 1, -1, 6], 10));

//2 O(N)
function sum2(arr, target) {
  //sort array
  var sorted = arr.sort((a, b) => a - b);
  //use multiple pointer technique
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    let add = sorted[left] + sorted[right];
    if (add === target) {
      return [sorted[left], sorted[right]];
    } else if (add > target) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sum2([3, 5, -4, 8, 11, 1, -1, 6], 10));
