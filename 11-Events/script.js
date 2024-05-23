// let btn1 = document.getElementById("btn1");
//btn1.onclick = (e) => {
    // console.log(e);
    // console.log(e.type);
    // console.log(e.target);
    // console.log(e.clientX,e.clientY);
    // let a = 23;
    // a++;
    // console.log(a); // 24
//}
// add event listner --------------
// btn1.addEventListener("click" , (e) => {
//     console.log('button 1 was click h1');
//     // console.log(e);
// });
// btn1.addEventListener("click", () => {
//     console.log('button 1 was click hander2');
// })

// const hander3 = () => {
//     console.log('button 1 was click hander3');
// }

// btn1.addEventListener("click", hander3 );

// btn1.addEventListener("click", () => {
//     console.log('button 1 was click hander4');
// })
// // remove function
// btn1.removeEventListener('click',hander3)



// // --------------------------------------
// let div = document.querySelector("div");
// div.onmouseover = (e) => {
//     console.log(e);
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
    // console.log('inside the div');
//}

// lets practic 
// -------  dark mood light mood ---------

let modeBtn = document.getElementById("mode");
let body = document.querySelector("body");
let currMode = 'light'; // dark 
modeBtn.addEventListener("click", ()=>{
    if(currMode === 'light'){
        currMode = 'dark';
        body.classList.add('dark')
        body.classList.remove('light');
    }else{
        currMode = 'light';
       body.classList.add('light');
       body.classList.remove('dark');
    }
    console.log(currMode);
})