// let months = ["Jan", "Mar", "May", "Jul", "Aug", "Oct", "Dec"];

// months.splice(1, 0, "Feb");
// console.log(months);

// const countUp = (n) => {
//   if (n <= 0) {
//     return [];
//   } else {
//     let arrCount = [];
//     arrCount = countUp(n - 1, arrCount);
//     arrCount.push(n);
//     return arrCount;
//   }
// };

// const countDown = (n) => {
//   if (n <= 0) {
//     return [];
//   } else {
//     return [n, ...countDown(n - 1)];
//   }
// };

// console.log(countDown(5));

// const rangeOfNumbers = (start, end) => {
//   if (start === end) {
//     return [start];
//   } else {
//     return [start, ...rangeOfNumbers(start + 1, end)];
//   }
// };

// console.log(rangeOfNumbers(1, 5));

const sumRange = (arr, n) => {
  if (n === 0) {
    return 0;
  } else {
    return arr[n - 1] + sumRange(arr, n - 1);
  }
};

console.log(sumRange([2, 3, 4, 5], 3));
