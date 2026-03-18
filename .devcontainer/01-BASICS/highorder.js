// for of

// [" ", " " ," "]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    console.log(num);
    
}
const  greeting = " I LOVE YOU BABY "
for (const greet of greeting) {
    console.log(`EACH CHAR ${greet}`);
    
}
// MAP
// const map = new Map()
// map.set("PK","PAKSITAN")
// map.set("SH","PAKSITAN")
// map.set("HA","PAKSITAN")
// map.set("PK","PAKSITAN")
// console.log(map);
// for (const[key,value] of map) {
//     console.log(key,':-', value );
    
// }
// const myObject = {
//     gamw1: 'nsf ',
//     game2: 'spiderman'

// }
// for (const[key,value]  of myObject) {
    
//     console.log(key,':-', value );n
// }
// forin loop

const MyObject = {

    JS : 'javascript',
    cpp : 'c++',
    rb : "rubby"}
    for (const key in MyObject) {
       console.log(`${key} is short cut for ${MyObject[key]}`);
       
        
        
    }

    const programming =["js","rb","py","java","cpp"]
    for (const key in programming) {
        
        console.log(programming[key]);
        
    }
// foreach
 const coding =["js","rb","py","java","cpp"]

//  coding.forEach(  function (val){console.log(val);
//  })
// coding.forEach(  (item)=> {

//     console.log(item);
    
// })