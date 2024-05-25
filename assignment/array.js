// let marks =[54,8,5,78,65,87];
// let sum=0;
// for(let val of marks ){
//     sum+=val;
// }
// let avg = sum/marks.length;
// console.log(`avg marks of class= ${avg}`);

let companies = ["bloomberg","microsoft","uber","google","ibm","hrtflix"]
console.log(companies.shift());//use for delet first name
console.log(companies);
companies.splice(3,1,"lucky");//use for one element replece with the one new element in which google replec with lucky
console.log(companies);
companies.push("amazon");
console.log(companies);