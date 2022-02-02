////easy- Write a function that takes in an array of numbers and outputs the average of all the numbers.
function avg(arr) {
    var sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum / arr.length;
  }
  console.log(avg([1, 4, 7]));
  console.log(avg([10, 5]));
  console.log(avg([1.5, 3, 2.5, 1]));
  
  //medium -Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).You are given a target value to search. If found in the array return its index, otherwise return -1. You may assume no duplicate exists in the array. Use a function. Use the built in method .indexOf( ) and/or  for loops.
let numbers = [4,5,6,7,0,1,2]
let firstNums = (numArr, target) => numArr.indexOf(target)
console.log(firstNums(numbers,7))

//VERYHARD: You are given coins of different denominations and a total amount of money amount. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
var Change = function(coins, amount){
  const table = new Array(amount + 1).fill(Infinity);
  table[0]=0;

  for(let coin of coins){
    for(let i =0; i <table.length; i++){
      if(coin<= i){
        let idx = i - coin;
        let potentialAmt = table[idx] + 1;
        table[i] = Math.min(potentialAmt,table[i]);
      }
    }
  }
  return table[table.length -1] === Infinity ? -1: table[table.length -1];
};