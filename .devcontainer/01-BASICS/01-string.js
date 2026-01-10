const name = "shahzaib"
const subject = " 50"

//console.log(name + subject + "value"); outdated syntax


console.log(`Hello my name is ${name} and my subject is ${subject}`);



const gameName = new String('shybi-hc-hg')
//console.log(gameName[1]);
//console.log(gameName.__proto__);


//console.log(gameName.length);
//console.log(gameName.toLocaleUpperCase());
//console.log(gameName.charAt('2'));

const newString = gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-6,4)

console.log(anotherString);


const newStringOne = "    shybi   "

console.log(newStringOne);

console.log(newStringOne.trim());


const url = "https://hitesh.com/hitesh%20cchaudary"
 console.log(

     url.replace('%20','-')
 );
console.log (url.includes('hitesh'))


console.log(gameName.split('-'));





