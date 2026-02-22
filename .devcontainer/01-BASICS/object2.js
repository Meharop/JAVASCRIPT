//const tinderUser = new object ()



const tinderUser2 = {}
tinderUser2.id = "123"
tinderUser2.name = "shybi"
tinderUser2.isLoggedIn = false


const regularuser = {
    
    
    email : "meharop@334",
    fullname : {
        userFullname : {
            firstname : "shahzaib",
            lastname : "ali"
        }
    }
}
// console.log(regularuser);
// console.log(regularuser.fullname);
// console.lo(regularuser.fullname.userFullname.firstname);
const obj1 = {1: "a" ,2:"b"}
const obj2 = {3: "a" ,4:"b"}
const obj4 = { 5: "a", 6 : " b"}
 const obj3 = {...obj1,...obj2,...obj4}

// const obj4 = Object.assign(obj1,obj2)
console.log(obj3);
// console.log(obj4);
const useId = [

    {
        id : "1",
        email :"merhar@5473"
    },
    {

    },
    {
        
    },
]
console.log(tinderUser2);

console.log(Object.keys(tinderUser2));

console.log(Object.values(tinderUser2));
console.log(tinderUser2.hasOwnProperty('isLoggedIn'));

