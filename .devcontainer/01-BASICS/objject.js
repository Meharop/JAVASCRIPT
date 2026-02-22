// singleton

// Object.create
// object literals 

const mySym = Symbol ('key1')

const Jsuser = {
    name : "shahzaib" ,
    "new name": "shahzib mansha" ,
    age : 20 ,
    [mySym] : "mykey1",
    location : "kasur" ,
    email : "shahzaib@4428" ,
    isLoggedIn : false ,
    lastLoggin : ["Monday","friday"]}
// }
// console.log(Jsuser.email);
// console.log(Jsuser[mySym]);
// console.log(Jsuser['email']);
// console.log( Jsuser["new name"]);
 Jsuser.email = "meharop@4438"
//  Object.freeze(Jsuser)
 Jsuser.email = "meharop@2222"

// console.log(Jsuser);
 
Jsuser.greeting = function(){
    console.log("hello every one");
    
}
Jsuser.greetingtwo = function(){
    console.log( `hello js user, ${this.name}`);
    
}
// console.log(Jsuser.greeting());
// console.log(Jsuser.greetingtwo());
const newsym = Symbol ('key1')
const mydata = { 

    name : "sayang",
    class : "bscs",
    [newsym]: "newkey1",
    number : 843654973576
}
console.log(mydata['class'] );

mydata.name = "cintaku"
mydata.greetings = function(){
    console.log(`hello  ,${this.name}`);
    
}
console.log(mydata);
console.log(mydata[newsym]);

 console.log(mydata.greetings());
