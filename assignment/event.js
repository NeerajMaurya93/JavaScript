// dark and light mode by the click button 
let modeBtn=document.querySelector("#mode");
let curntMode ="light";
modeBtn.addEventListener("click",()=>{
    if(curntMode === "light"){
       curntMode = "dark";
      document.querySelector("body").style.backgroundColor = "black";
      document.querySelector("body").style.color = "white";

    }else{
       curntMode = "light";
        document.querySelector("body").style.backgroundColor = "white";
      document.querySelector("body").style.color = "black";

    }
    console.log(curntMode);
});