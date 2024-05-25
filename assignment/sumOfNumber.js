var sum=0;//var use out off block
for(let i=1;i<=10;i++){//let use in block
    console.log("i=",i);
    sum=sum+i;
    
}
console.log("sum of number 1 to n is = ",sum);
console.log("loop ended");
console.log("i=",i);//not work i keyword
