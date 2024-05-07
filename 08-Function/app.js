// ----------- function in JS ---------

/*
    function checkPalindrome() {
    let num = prompt('enter number'); // 12321 String form
    const userInput = parseInt(num);
    const temp = num;

    const revStr = temp.split("").reverse().join("");
    const chekInput = parseInt(revStr);

    (userInput==chekInput) ? console.log("Palindrome") : console.log("Not palindrome")
}

checkPalindrome();

*/

// function myFun(){
//     console.log('learn javascript');
    
// }
// myFun();

// function myMsg(msg){
//     console.log(msg);
// }
// myMsg('i love js')

// function - 2 number , sum 
// function sum(x,y){
//     console.log(x + y);
// }
// sum('sum = x + y ',2443,3456)

// function sum(x,y){
//     s = x + y;
//     return s;
// }
// let finalSum = sum(44,44);
// console.log(finalSum);

// // arrow function ------------
// const arrowSum = (a,b) => {
//     console.log(a + b);
// }
// arrowSum(44, 67);

// // mul --
// const arrowMul = (a,b) => {
//     console.log(a * b);
// }
// arrowMul(2,5)

// // print hello using arrow function ---
// const printHello = () => {
//     console.log('hello');
// }
// printHello();

// lets practice ----
// creat a function using the "funcation" keyword that taskes a stirng as an argument &
// return the number of vowels in the string----

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//        if(char === 'a' || 
//            char === 'e' ||
//            char === 'i' ||
//            char === 'o' ||
//            char === 'u')
//                 {
//            count++;
//            }
//     }
//     return count;
    
// }
// console.log(countVowels('hello')); // 2 

// in arrow function
// let countVowe = (str) => {
//     let count = 0;
//     for(const char of str){
//        if(char === 'a' || 
//            char === 'e' ||
//            char === 'i' ||
//            char === 'o' ||
//            char === 'u')
//                 {
//            count++;
//            }
//     }
//     return count;
// }
// console.log('count of vowels = ',countVowe('subham kumar sharma')); // 6


// function store a variable 
// let addSum = (a,b) => {
//      sum = a + b;
//      return sum;
// }
// console.log(addSum(44,66));


// subham  vowels
function countVowels(str){
    let count = 0;
    for(let char of str){
        // console.log(char);
       if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
           count++
       }
    }
    return count;

}
console.log('count of vowels = ',countVowels('aeiou'));

// consonent 
function countConsonant(str){
    let count = 0;
    for(char of str){
        // console.log(char);
       if(char !== 'a' && char !== 'e' && char !== 'i' && char !== 'o' && char !== 'u'){
          count++;
       }
    }
    return count;
}
console.log('count of consonent = ',countConsonant('subham'));

// ---------------------------     forEach in js    ------
// let arr = [1,23,4,55,6,6,77];
// let arr1 = ['delhi','patna','bihar','lucknow']
// // arr.forEach((val,indx,arr)) --- used in parameter
// arr1.forEach((val)=>{
//     console.log(val.toLocaleUpperCase());
// })
// arr.forEach(function printVal(val){
//     console.log(val);
// })

// Q.no- 1 
// for a given array of number [2,3,4,5,6] print the square 
// of each value using the forEach loop

// let nums = [2,3,4,5,6];
// let calculateSquar = (num) => {
//     console.log(num * num);
// }
// nums.forEach(calculateSquar);


// // second method ----
// let number = [4,5,6,7];
// let sque = number.forEach((num)=>{
//     return (num * num);
//})
//console.log(sque);

// ---- Array method - map() -----

// let arr = [1,2,3,3,4,5,5];
// arr.map((val) => {
//     console.log(val);
// })

// // return new array using map method
// let arr1 = [5,6,7,8,9,1];
// let newArr = arr1.map((val) => {
//     return val;
// });
// console.log(newArr);

// // using map method square of array number 
// let arr2 = [2,3,4,5,6,7];
// let squareArr = arr2.map((squ)=>{
//     return squ * squ;
// });
// console.log(squareArr);

// // multiplay by 2 each element of array using map method 
// let arr3 = [2,3,4,5];
// let multiplayArr = arr3.map((mul) => {
//     return mul * 2;
// })
// console.log(multiplayArr);

// // --------  filter method ------------  
// // filter even number 
let arr4 = [1,4,5,6,67,6,7,8,9];
let evenArr = arr4.filter((val)=>{
    return val % 2 === 0 ;
});
console.log('even array =',evenArr);

// // filter odd number 
// let arr5 = [1,2,3,4,5,6,7,8];
// let oddArr = arr5.filter((val)=>{
//     return val % 2 !== 0;
// });
// console.log("odd array =",oddArr);

// // filter grater value of 5 in array 
// let arr6 = [1,2,3,4,5,6,7,7,8,910];
// let newsArr = arr6.filter((val)=>{
//     return val > 5;
// });
// console.log(newsArr);

// // filter the less value of 7 in array 
// let arr7 = [1,2,3,4,5,6,7,8,9,10];
// let lessArr = arr7.filter((val)=>{
//     return val < 7;
// });
// console.log(lessArr);



// let DynamicArr = ["Hello World", true, 125.02154, {"Name" : "Ram"}, () => {
//     console.log("Hello I am a functio stored in an Array!!");
// }];
// console.log(DynamicArr[4]());
// console.log(num);

// palindrome number 12321 ---
function palindromeNum(){
    let userInput = prompt('enter number');
    let temp = userInput;
    let revStr = temp.split('').reverse().join('');
    let convNum = parseInt(userInput);
    let convStr = parseInt(revStr);
    (convNum === convStr) ? console.log('is a palindrome num',userInput) : console.log('is a not palindrome',userInput);
}
// palindromeNum();

// fibonicci sequence -------- 

// let sum = function(a,b){
//     let result = a + b;
//     return result;
// }
// let output = sum(4,6);
// console.log(output);

// ------------ reduce method ---------------------

// const arr9 = [1,3,4,5];
// let output = arr9.reduce((res , curr)=>{
//     return res + curr;
// });
// console.log(output);

// //  fin the largest value of an  [23,45,78,90,35,78]; array ; 
// let numArry = [23,45,78,35,78];
// let outputnew = numArry.reduce((prev , curr)=>{
//     return prev > curr ? prev : curr
// });
// console.log(outputnew);

//fin the largest value of an  [23,45,78,90,35,78]; array ; 

// let array = [1,2,3,4,5,6,7];
// let outputLess = array.reduce((prev , curr) => {
//     return prev < curr ? prev : curr;
// });
// console.log(outputLess);

// // higher number of student -- find array [23,34,56,78,90,23,67,89]
// let markes = [23,34,56,78,90,23,67,89];
// let topper = markes.filter((val) => {
//     return val > 75;
// });
// console.log(topper);

// Qn.1 - take a number n as input from user . 
//create an array of number from 1 to n.


// let userInpu = prompt('enter a number');
// let array1 = [];
// for(i = 0 ; i < userInpu; i++){   
//    array1[i] = i + 1;    
// }

// let n = prompt('enter number');
// let arrNum = [];
// let i = 0;
// while(i < n){
//     arrNum[i]  = i + 1;
//     i++;
    
// }
// console.log(arrNum);

// let n = prompt('enter number');
// let arrys = []
// let i = 0;
// while(i < n){
//     arrys[i] = i + 1;
//     i++;
// }console.log(arrys);

// -----------  filter topper number ----------
// let markes = [23,45,56,78,90,10];
// let topper = markes.filter((val)=>{
//     return val > 50;
// });
// console.log('topper markes = ',topper);


// let n = prompt('enter number');
// let arr = [];
// for(i = 0; i < n; i++){
//     arr[i] = i + 1;
// }
// console.log(arr);

// calculate the sum of all number of arr [1,3,4,6,3,6]
let num = [1,2,3,4,5,6,7,8,9];
let sum = 0;
for(i = 0; i < num.length; i++){
    sum = sum + i;
}
console.log(sum);

// odd number print -- 
let arr = [2,3,4,5,6,7,7];
let odd = arr.filter((val) => {
    return val % 2 !== 0;
})
console.log(odd);

// -----------sque
let number = [4,5,6,7];
let newArr = number.map((val) => {
    return val * val;
})
console.log(newArr);

































