const userEmail = "dshhhs@.com"
if(userEmail){
console.log("got user email");

}else{
    
    console.log("don not have email");

}

// faly value 
// false , 0 , -0 , BinInnt 0n , " " , null , undefined , NaN

// truthy value
// const emptyObj = {}
// if(Object.key(emptyObj).length===0){
//     console.log("hfjgkjhd")
// }

// nullish coalecing operator (??) : null undefined
let val1;
// val1 = 5 ?? 10


// val1 = null ?? 10 
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20

console.log(val1);
//TERNIARY OPERATOR
const iceteaprice = 100

iceteaprice <= 80 ? console.log("less then 80") : console.log("more then 80");

