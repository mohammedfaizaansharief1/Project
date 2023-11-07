
// Objects ---
// let obj={}
// obj=[{firstname:"John",lastname:"Doe",age:50,eyeColor:"Blue"}]
// function fun(){
//     console.log(obj.firstname)
// }
// console.log(obj)

// map ---
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.map(myfunction)

// function myfunction(num){
//     console.log(num)
// }


//Excercise Maps -- 
// let course=['html','css','js']
// let new2=course.map(myfunction)
// let new1=new2

// function myfunction(num){
//     console.log(num.toUpperCase())
// }
// console.log(new1)

var arr = ["html","css","js"];
var u=arr.map(a);

function a(eaq){
    return eaq.toUpperCase()
}
console.log(u)
// console.log(arr)
// console.log(arr[1].toUpperCase())
// console.log(arr[2].toUpperCase())

// var newArr = arr.map(function(elem,index,array) {
//     // console.log(elem," ",index, " ", array)
//     return elem.toUpperCase()
// })