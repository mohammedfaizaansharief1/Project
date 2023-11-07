//Excercise Maps

// 1
var arr = ["html","css","js"];
var u=arr.map(a);

function a(eaq){
    return eaq.toUpperCase()
}
console.log(u)

// 2
let num=[1,2,3,4,5]
var num1=num.map(fun);

function fun(item){
    proc=item*item
    return proc
}
console.log(num1)

// 3
let larr=[{sugar:40,lemon:2},{keyboard:500,monitor:10000}]
var new5=larr.map(newFun);

function newFun(item){
    console.log(Object.keys(item))
}

// 4
let celsius = [10,20,3,5,32]
var a=celsius.map(fun2);

function fun2(element){
    // var c=(element * 9/5) + 32
    console.log((element * 9/5) + 32)
}

// 5
let students = [{name:'Mohammed',age:30},
                {name:'Faizaan',age:15},
                {name:'Junaid',age:18}]
var v = students.map(fun3);

function fun3(a){
    // console.log(Object.values(a))
    console.log(a)
    total = 2023 - a.age
    console.log('Year of birth:',total)
}

// Excercise Filter

// 1
let x = [1,2,3,4,5,6,7,8,9]
var r = x.filter(newq);

function newq(z){
    // if(z%2 == 0){
    //     console.log(z)
    // }
    return z%2 == 0;
}
console.log(r)

// 2
let countries = ['INDIA','AMERICA','USA','FRANCE','ITALY'] 
var t = countries.filter(fun4);

function fun4(item1){
    item1.
}