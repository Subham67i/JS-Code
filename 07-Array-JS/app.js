// arrays 

// let marks = [23, 34 , 45, 46, 45];
// console.log(marks);
// console.log(marks.length);// 

// let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"];
// console.log(heroes);

//---------------------------

//change array value :--           
// let markes = [23,45,67,89,65,89,45];
// markes[4] = 40;
// console.log(markes);

// ---------- looping over an array ---------------

// let heroes = ["ironman","thor","hulk","shaktiman","spiderman","antman"];

// for(let indx = 0; indx < heroes.length; indx++){
//     console.log(heroes[indx]);
// }

// using for of loop ----
// let cities = ["delhi", "mumbai","lucknow","patna","mohali","jaipur"];
//  for(city of cities){
//     console.log(city.toUpperCase());
//  }

 //  lets practic
 // Qno 1 :- for a given array with markes of student [85,97,44,37,76,60]
 // find the average markes of the entire class .

//  let markes = [85,97,44,37,76,60];
//  let sum = 0;
//  for(val of markes){
//    sum = sum + val; 
//    // console.log(val);
//  }
//  let avg = sum / markes.length;
//  console.log(`average markes of the class = ${avg}`); 

 // Q.No - 2 :- 
 // for a given array with prices of 5 items -> [250,645,300,900,79];
 // all items have an offer of 10% off on them change the array final price after 
 // applying offer .

 // using for of loop ----:-
// let = items = [250,645,300,900,67];
// let i = 0;
// for(let val of items){
//    let offer = val / 10; // 25,64,30,90,6.7 //console.log(offer);
//    items[i] = items[i] - offer;
//    console.log(`value of offer items = ${items[i]}`);
//    i++;
// }
 
// using for loop -------
// let = items = [250,645,300,900,67];

// for(let i = 0; i < items.length; i++){
//    let offer = items[i] / 10;
//    // console.log(offer);
//    items[i] -= offer;
// }
// console.log(items);

// let markes = [28,89,89,67,56,46,46,89,99];
// let sum = 0;
// for(val of markes){
//    sum += val;
// }
// let avg = sum / markes.length;
// console.log(avg);

// for loop ;
// let items = [245, 45, 455, 677, 888, 900];
// for(i = 0; i < items.length; i++){
//    let offer = items[i] / 20;
//    items[i] -= offer;
// }
// console.log(items);

//let mobilePrice = [40000, 50000, 60000, 70000, 80000];
// for(i = 0; i < mobilePrice.length; i++){
//     let offer =  mobilePrice[i] / 20;
//     mobilePrice[i] -= offer;
// }
// console.log(mobilePrice);

// ----------------------------- array methods -----------------
// Push():add to end
// Pop():delete from end & return
// toString(): convert array to string

// Push():add to end :-
// let foodItem = ['mango', 'apple','banana','litchi','orange'];
// foodItem.push('green','yellow')
// console.log(foodItem);

// Pop():delete from end & return :-
// let colorItem = ['red','green','black','blue','orange'];
// console.log(colorItem);
// let deletedItem = colorItem.pop();
// console.log(colorItem);
// console.log(deletedItem);

// toString(): convert array to string :-
// let colorItem = ['red','green','black','blue','orange'];
// console.log(colorItem);
// console.log(colorItem.toString());

// concat :- joins multiple array & return result
// let  colorItem = ['red','green','black'];
// let  colorNew = ['blue','orange'];
// let colorUsed = ['white','pink'];
// let color = colorItem.concat(colorNew,colorUsed);
// console.log(color);
// console.log(colorItem);

// unshift :-  add to start 
// let words = ['apple', 'mango','banana','orange'];
// words.unshift('graps');
// console.log(words);

// shift():- delete from start & return
// let words = ['apple', 'mango','banana','orange'];
// let deleteWord = words.shift();
// console.log(words);
// console.log(deleteWord);

// slice(): returns a piece of the array:-
// let words = ['one', 'two', 'three','four', 'five','six'];
// console.log(words);
// let newWord  = words.slice(1,2);
// console.log(newWord);

// splice(): change original array (add,remove,replace):-
//splice(startidx, delcount, newel..);

// let arr = ['1','3','7',"8","1","4","9"];
// arr.splice(1,3,102,105);
// console.log(arr);

// // add element --

// let arr1 = ['2','4','5',"8"];
// arr1.splice(2,0,102) 
// console.log(arr1);

// //replace element :--
// let arr2 = ['1','3','5','6'];
// arr2.splice(2,1,44);
// console.log(arr2);

// let`s Prctice :-
// Q.no- create an array to store companies -> 'bloomber',microsoft,uber,google,ibm,netflix.
// a)- remove the first company from the array--
// b)- rmove uber & add in its place
// c) - add amazon at the end 

// let companies = ["Bloomberg", "Microsoft","Uber","Google","IBM", "Netflix"];
// companies.shift();
// companies.splice(1,1,"ola");
// companies.push("amazone")
// console.log(companies);

//  removing dublicate number 
let num = [1,3,4,5,,6,7,8,9,2,4,4,5,7,4,2,2,4,5,6,9,];
let removeDuplicate  = num.filter((item , index)=>{
    return  num.indexOf(item) === index;
})
console.log(removeDuplicate);







