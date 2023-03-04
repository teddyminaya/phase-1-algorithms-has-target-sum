function hasTargetSum(array, target) {
  // Iterate through the array
  for (let i = 0; i < array.length; i++) {
    const num1 = array[i];
    // Check if the target minus the current number is in the rest of the array
    for (let j = i + 1; j < array.length; j++) {
      const num2 = array[j];
      if (num1 + num2 === target) {
        // If we find a pair of numbers that add up to the target, return true
        return true;
      }
    }
  }
  // If we go through the whole array and haven't found a pair that adds up to the target, return false
  return false;
}


/* 
  0(n^2)
*/

/* 
  Iterate through the array. Check if the target minus the current number is in the rest of the array. If we find a pair of numbers that add up to the target, return true
*/

/*
  This code uses two nested loops to iterate through the array and compare each pair of numbers. For each number in the array, it checks if the target minus that number is in the rest of the array. If it finds a pair of numbers that add up to the target, it returns true. If it goes through the whole array without finding a pair that adds up to the target, it returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
