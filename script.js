// 1-savol
// function makeNegative(num) {
//     if(num>0){
//         console.log(-num);
//     }else{
//         console.log(num);
//     }


// }
// makeNegative(5)
// makeNegative(3)
// makeNegative(0)

// 2-savol
// function evenOrOdd(num) {
//     if(num % 2 === 0){
//         console.log("Even");
//     }else{
//         console.log("Odd");
//     }


// }
// evenOrOdd(2)
// evenOrOdd(7)

// 3-savol
// function removeChar(str) {
//     let arr = str.split('')
//     let res = arr.slice(1, -1).join('').toString()
//     console.log(res);


// }
// removeChar("hello")
// removeChar("abc")

// 4-savol
// function solution(str) {
//     let arr = str.split('')
//     let res = arr.reverse().join('').toString()
//     console.log(res);
// }

// solution("world")

// 5-savol
// function positiveSum(arr) {
//     const num = arr.filter(num => num > 0);
//     const sum = num.reduce((acc, cur) => acc + cur, 0);
//     console.log(sum);
// }

// positiveSum([1, -2, 3, 4, -5])

// 6-savol
// function repeatStr(n, s) {
//     return s.repeat(n);
// }

// console.log(repeatStr(3, "ha"));

// 7-savol
// function getMiddle(s) {
//     let len = s.length;
//     let mid = Math.floor(len / 2);
//     return len % 2 === 0 ? s[mid - 1] + s[mid] : s[mid];
// }
// console.log(getMiddle("test"));
// console.log(getMiddle("testing"));

// 8-savol
// function findShort(s) {
//     return Math.min(...s.split(" ").map(word => word.length));
// }
// console.log(findShort("I love JavaScript frontend")); 
// console.log(findShort("Simple and easy tasks"));

// 9-savol
// function accum(s) {
//     return s
//         .split('')
//         .map((ch, i) => ch.toUpperCase() + ch.toLowerCase().repeat(i))
//         .join('-');
// }
// console.log(accum("abcd"));
// console.log(accum("RqaEzty")); 

// 10-savol
// function descendingOrder(n) {
//     return parseInt(String(n).split('').sort((a, b) => b - a).join(''));
// }
// console.log(descendingOrder(42145));
// console.log(descendingOrder(145263));






