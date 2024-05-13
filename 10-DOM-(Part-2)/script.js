// ------------------ getAttribute value --------------
// let div = document.querySelector("div");
// console.log(div);

// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// ----------------- setAttribute value-------------
// let para1 = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// style sccess =---------------
// let sty = document.querySelector("div");
// sty.style.backgroundColor = "green";
// sty.style.fontSize = "20px";
// sty.innerText = "hello";

// insert new element 
// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!"
// console.log(newBtn);

// let divBtn = document.querySelector("h1");
// divBtn.append(newBtn);

// newheading creat 
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<hi>h1 heading </h1>";
// console.log(newHeading);

// document.querySelector("body").prepend(newHeading);


// // remove method 
// let para = document.querySelector("p");
// para.remove();

// newHeading.remove()


// ----------- let's practice --------
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
// console.log(newbtn);
document.querySelector("button");
newbtn.style.backgroundColor = "red";
newbtn.style.color = "white";
document.querySelector("body").prepend(newbtn);


// acces class name  add a new class not remove old class 
let para = document.querySelector("p");
para.classList.add("newContent");