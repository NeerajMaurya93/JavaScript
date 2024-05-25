//the change in the state of an object is known as an Event
//event are fired to notify code "interesting chanange "that may affect code execution.
//mouse event (click ,duble click etc)
//keyboard event (keypress, keyup ,keydown)
//form event (submit etc.)
//print event & many more



//  event handeled by normel function
// let btn1=document.querySelector("#btn1");
// btn1.onclick=()=>{
//   console.log("button was clicked");
//   let a =25;
//   a++;
//   console.log(a)  
    

// }
// let div=document.querySelector("div");
// div.onmouseover =()=>{
//     console.log("you are inside div");
// };


// event listeners

//node.addEventlistener(event,callback)
// btn1.addEventListener("click",()=>{
//     console.log("button1 was clicked");
// });
// btn1.addEventListener("click",(evt)=>{
//     console.log("button1 was clicked by hendeler two");
//     console.log(evt);
//     console.log(evt.type);
// });

//node.removeEventListener(event,callback)
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked by hendler 1");
});
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked by hendeler 2");
});
const handeler3=()=>{
    console.log("button1 was clicked by hendeler 3");//creat a new object for remove  thes event and pass this object in remove event
}
// btn1.addEventListener("click",handeler3);
btn1.addEventListener("click",()=>{
    console.log("button1 was clicked by hendler 4");
});

let div = document.querySelector("div");
btn1.removeEventListener("click",handeler3)