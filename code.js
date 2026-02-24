
var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(typeof(num));

//function
var sayhello=function(){
    alert("hello");
}

//array
var numberarray=[1,2,3,4,5];
var animal=new Array("dog","cat","tiger");
console.log(numberarray);
console.log(animal);
console.log(typeof(numberarray));
console.log(typeof(animal));

//object
var person={name:"john",age:30,city:"new york"};
console.log(person);
console.log(typeof(person));

//symbol is a unique and immutable data type that can be used as an identifier for object properties; used to represent unique values taht can be used as identifiers or keys in object . created using the Symbol() function
const sym1=Symbol(4);
console.log(sym1);
const sym2=Symbol(4);
console.log(sym2);

if(sym1===sym2){
     console.log("TRUE ,sym1 and sym2 are equal"); 
}
else{
    console.log("FALSE ,sym1 and sym2 are not equal");
}//bacuse each symbol is unique even if they have the same description
 
/*javaScript Operators
arithmetic operator: +, -, *, /(quotient), %(remainder), ++, --
comparison operator: ==, ===, !=, !==, >, <, >=, <=
= assign value,== compares values only, === compares values and type, != compares values only, !== compares values and type
logical operator: &&, ||, !
assignment operator: =, +=, -=, *=, /=, %=
ternary operator: condition ? expression1 : expression2*/

