let marks= [65,67,54,56,23,67];
console.log(marks);
// console.log(marks.length);
// console.log(typeof(marks));
// console.log(marks[4])


//Array methode
//  add=[0,3,5,6];
// marks.push(add)
// console.log('add',add)
// console.log(marks.toString)

// deleted=[65,67]
// marks.pop(deleted)
// console.log('deleted',deleted)
// console.log(marks)

// let allitem=marks.concat(add)//add array
// console.log(allitem)

//for offer calculet
for (let i=0;i<marks.length;i++){
    let offer = marks[i]/10;//for 10 % descount
    marks[i]-=offer;
}
marks.push(4,5,6)//for add thes element in the list
marks.pop(4,0,6)//for delet
console.log("ofter offer",marks);