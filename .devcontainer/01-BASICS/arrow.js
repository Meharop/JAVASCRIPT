const user ={

    username:"shahzaib",
    price : 999 ,

    welcomeMessage : function (){
        console.log(`${this.username}  ,wlecome to website`);
        console.log(this);
        
    }
    
}
// user.welcomeMessage()
// user.username = "Ali"
// user.welcomeMessage()
// console.log(this);
// function chai(){
//     let username ="shahzaib"
//     console.log(this.username);
    
// }
// chai()
// const chai = function (){

//    let username ="shahzaib"
//     console.log(this.username);
// }
const chai = () => {

   let username ="shahzaib"
    console.log(this);
}
// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2

// }
// const addTwo = (num1,num2) =>  num1 + num2
// const addTwo = (num1,num2) =>  (num1 + num2)
const addTwo = (num1,num2) =>  ({username : "shahzaib"})


console.log(addTwo(5,2));

