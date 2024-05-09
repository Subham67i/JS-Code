
// console.dir(window.document.body);
// console.log(document.body);

// document.body.childNodes[1].innerText = 'subham';

// selecting with id --- 
// let id = document.getElementById("heading");
// console.dir(heading);

// select element by class name --
let class1 = document.getElementsByClassName('text');
console.log(class1);
console.dir(class1);

//select elements by tag name ---
// let tag = document.getElementsByTagName('button');
// console.log(tag);
// console.dir(tag);

//query selector 
let que = document.querySelector('p');
console.log(que);

//-- -----  query all -----
let queall = document.querySelectorAll('p');
console.log(queall);

document.querySelector("btn");

//.innerText ---------
// let div = document.querySelector("div");
// console.dir(div);

// innerHtml  ---



document.querySelector("h1");
// practic question 
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText +  "Apna collage students";

// simple solution --- 
let divs = document.querySelectorAll(".box");
let idx = 1;
for(div of divs){
    div.innerText =  `new unique value ${idx} in the box`;
    idx++;
}
// divs[0].innerText = 'New uniqu value 1';
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = 'value 3';

let para1 = document.getElementById("p");


