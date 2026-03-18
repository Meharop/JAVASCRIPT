// for of

// [" ", " " ," "]
// [{},{},{}]


const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}
const  greeting = " I LOVE YOU BABY "
for (const greet of greeting) {
    // console.log(`EACH CHAR ${greet}`);
    
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

// const MyObject = {

//     JS : 'javascript',
//     cpp : 'c++',
//     rb : "rubby"}
//     for (const key in MyObject) {
//        console.log(`${key} is short cut for ${MyObject[key]}`);
       
        
        
//     }

    // const programming =["js","rb","py","java","cpp"]
    // for (const key in programming) {
        
    //     console.log(programming[key]);
        
    // }
// foreach
//  const coding =["js","rb","py","java","cpp"]
 
 //  coding.forEach(  function (val){console.log(val);
 //  })
 // coding.forEach(  (item ,index , arr)=> {
    
//     console.log(item) , index, arr
    
// })

// const myCoding = [
    
//     {
//         languageName : "javascript",
//         languageFIleName : "js"
//     },
//     {
    //         languageName : "java",
    //         languageFIleName : "java"
    //     },
    //     {
        //         languageName : "python",
//         languageFIleName : "py"
//     }
// ]

// myCoding.forEach(  (item) => {
    //     console.log(`${item.languageFIleName} reffers to ${item.languageName}`);
    
    // })




    
    // const coding =["js","rb","py","java","cpp"]

    // const values = coding.forEach(  (item) => {
    //     // console.log(item);
    //     return item
    // })

    // console.log(values);
    

    const myNums = [1,2,3,4,5,6,7,8,9,10]
    //  const newNums = myNums.filter(  (num) => {
    //    return num>5
    //  })

//     const newNum = []
//     myNums.forEach(  (num) => {

//         if(num>5){
//             newNum.push(num)

//         }
//     })
// console.log(newNum);

/////////////////// .MAP IS AWSAM


// const mynumbers = [1,2,3,4,5,6,7,8,9,10]
// // const newnums= mynumbers.map(  (num) => num +10)
// const newnum = mynumbers
//                        .map( (num) => num * 10) 
//                        .map( (num) => num + 1) 
//                         .filter((num) =>num >= 15 )
// console.log(newnum);


///////////// REDUCE METHOD /////////////
const Nums = [1,2,3]

// const mytotal = Nums.reduce(function(acc , currval){
//     console.log(`acc:${acc} and currval:${currval}`);
    
const mytotal = Nums.reduce(  ( acc , currval) => acc+currval,0)
    
console.log(mytotal);


const shoppingcart = [

    {
itemname: "js cource",
price : 999

    },
    {
itemname: "py cource",
price : 3000

    },
    {
itemname: "c++ cource",
price : 5999

    }
]
const pricepay = shoppingcart.reduce((acc,item)=>  acc + item.price,0)
console.log(pricepay);
