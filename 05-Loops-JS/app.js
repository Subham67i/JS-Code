// ----  loops in JS ------

//  for(let i=1; i <= 5; i++){
//     console.log('i=',i);
//  }

// print 1 to 5 
// for(let count = 1; count <= 10; count++){
//     console.log('subham');
// }
// console.log('loop has ended');

// calculate sum of 1 to 5 -----
// let sum = 0;
// for( i= 1; i <= 5; i++){ 
//     sum = sum + i;
// }
// console.log('sum =', sum);

//calculate sum of 1 to n number---
function  calSum(){
    
    let sum1 = 0;
    let n = 10;
    for(let i= 1; i <= 10; i++){
    sum1 = sum1 + i;
}
console.log('sum1 = ', sum1);
}
calSum()

// infinite loop 
// for(let i = 1; i >= 0; i++){
    //console.log('i=',i);

// --- while loops --  
// let i = 1;
// while( i <= 5){
//     console.log('i =', i);
//     i++;
// }

// ----------- do wile loop -------------
// let i = 20;
// do {
//     console.log('name subham');
//     i++;
// }while(i <= 10);


// ----------- for-of- loop ------------

// let str = 'subham';
// for(let i of str){
//     console.log('i=', i);
// }

// ----- claculate string size  -----

// let str = 'subham kumar sharma';
// let size = 0;
// for(let val of str){
//     console.log('val=', val);
//     size++;
// }
// console.log('str size',size); // 19

// ------------- for in loop ---------------
// let students = {
//     name : 'subham',
//     age : 25,
//     gendr : 'mal',
//     isPass : true,
// };
// for(let key in students){
//     console.log(key , students[key]);
// }

// ----------   lets Practice :------------
// Qs.1 - peint all even number from 0 to 100.
// for(let num = 0; num <= 100; num++){
//     if(num % 2 === 0){
//         console.log('num = ',num);
//     } 
// } // print even number

// let num = prompt('enter number');
// if(num % 2 === 0 ){
//     console.log('even number');
// }else{
//     console.log('odd number');
// }

// for(let num = 0; num <= 100; num++){
//     if(num % 2 !== 0){
//         console.log(' odd number =', num);
//     }
// } // odd number
//-----------------------------------------------------------
// Qs.2:- create game user guess number  -------- 

// let gameNum = 25;

// let userNum = prompt('guess the game number : ');

// while (userNum != gameNum){
//   userNum = prompt('you entered wrong number . guess again ');
// }
// console.log('congratulation you entered the right number');

//-------------------------------------------------------=-


// let rightPassword = 12345678;

// let userPassword = prompt('inter password');

// while(rightPassword != userPassword){
//     userPassword = prompt('you interd wrong password try again 😒')
// }
// console.log('congratulation you entered the right password 😊');



// 
// let rightPass = 123;
// let userPass = prompt('enter password');
// while(rightPass != userPass){
//    userPass = prompt('you enter wring password try again ')
// }
// console.log('login ');

// let sum = 0;
// for(i=1; i <= 10; i++){
//     sum = sum + i
// }
// console.log(sum);


// ------ 12345678910 --------------------
function nNumberFind(){
     let n = 10;
     let num = [];
for(i=0; i < n; i++){
    // num[i]  = i * 5;
    num[i] = i + 1;
}
console.log(num);
}
nNumberFind()

// --------------------------
// let n = prompt('input num');
// let nums = [];
// for(i=0; i < n; i++){
//     nums[i] = i * 2;
// }
// console.log(nums);

function mobileOffer(){
    let mobilePrice = [40000, 50000, 60000, 70000, 80000];
for(i = 0; i < mobilePrice.length; i++){
    let offer =  mobilePrice[i] / 20;
    mobilePrice[i] -= offer;
}
console.log(mobilePrice);
}
mobileOffer();


let car = [250000,340000,5600000];
for(i = 0; i < car.length; i++){
    let offer = car[i] / 10;
    car[i] = car[i]  - offer;
}
console.log(car);

// mul 2  each element of arr
function myMul(){
    let arr1 = [2,4,6,7,85,9];
    let newArr = arr1.map((mul)=>{
    return mul * 2;
});
console.log(newArr);
}
// myMul()

// square of array map()
function mySquear(){
    let arr = [2,3,4,5,6,7];
let squArr = arr.map((squ) => {
    return squ * squ;
})
console.log(squArr);
}
// mySquear();
// decrement in map method in array num --------
let arr = [2,3,4,5,6,7];
let arrdec = arr.map((val) => {
    return val - 2;
})
console.log('dec',arrdec);

// grater number of array  filter 
let newarr = [1,2,34,56,7,8,8];
let newVal = newarr.filter((val)=>{
    return val > 7;
})
console.log(newVal);

//fin the largest value of an [23,45,67,89,90]; array  reduce; 
function largestNum(){
    let aarr = [23,45,67,89,87];
    let newAar = aarr.reduce((pre , curr)=>{
    return pre > curr ? pre : curr;
})
console.log(newAar);
}
largestNum();

// using the forEach method--------
function changStr(){
    let str = ['subham kumar sharma'];
    str.forEach((val)=>{
    console.log( val.toLocaleUpperCase());
})
}
changStr();

// store a aarrow fnction in a variable 
let str = [1,2,3,4,5];
let storArrow = str.filter((val)=>{
    return val > 2;
})
console.log(storArrow);

