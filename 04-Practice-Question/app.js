// Que No-1 
// get user to input a number using prompt ("enter a number :"). check if the number is a multiple of 5 or not.

// let num = prompt('enter a number');

// if(num % 5 === 0 ){
//     console.log(num, 'is a multiple of 5');
// }else{
//     console.log(num, ' is NOT a multiple of 5');
// }

// Q.No-2 
// write a code which can give grades to student according to their score:-
// (a) 90 to 100 = "A"
// (b) 70 to 89 = "B"
// (c) 60 to 69 = "C"
// (d) 50 to 59 = "D"
// (e) 0 to 49 = "F"

let score = prompt('enter a score ( 0 - 100 )');
let grade;

if(score >= 90 && score <= 100){
     grade = 'A';
}else if(score >= 70 && score <=89){
    grade = 'B';
}else if(score >= 60 && score <= 69){
    grade = 'C';
}else if(score >= 50 && score <= 59){
    grade = 'D';
}else if(score >= 0 && score <= 49){
    grade = 'F'
}else{
    grade = 'not a valid number'
}
console.log("your grade was :  ", grade);
