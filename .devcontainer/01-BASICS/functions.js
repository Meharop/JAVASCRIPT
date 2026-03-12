


function callMyName(){

console.log("S")
console.log("h")
console.log("a")
console.log("h")
console.log("z")
console.log("a")
console.log("i")
console.log("b")

}


// callMyName()
// function addTwoNumbers(number1,number2){

//     console.log(number1 + number2);
    
// }

//  const result = addTwoNumbers(4,3)


// console.log( "Result :" ,result);


function addTwoNumbers(number1,number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

//  const result = addTwoNumbers(4,3)


// console.log( "Result :" ,result);
 function loginuserMessege(username = "ali"){
    if (username===undefined){
console.log("PLEASE ENTER A USER NAME");
return
    }

    return `${username} just logged in`
 }
//  console.log(loginuserMessege("shahzaib"));
//  console.log(loginuserMessege("shahzaib"));


function calculateCartPrice(val1,val2,...num1){
    return num1

}
// console.log(calculateCartPrice(200,300,400,5000));


const user = {
    username : "shahziab",
    price: 199
}
function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}
// handleObject(user)
// handleObject({
//     username: "ali",
//     price: 399
// })

const myNewArray = [200,344,555,666]
function returnsecondValue(getarray){
    return getarray[1]
}
console.log(returnsecondValue(myNewArray));

const product1={

    name: "iphone",
    price: 50000000

}

const product2={

    name: "samsung",
    price: 50000000

}
function giveProduct(anyObject){

    console.log(`product name ia ${anyObject.name} and tge price is ${anyObject.price}`);
    
}

giveProduct(product1)
giveProduct(product2)