//asynchronous programming

//promise -> reject,resolve,pending
let promise = new Promise((resolve, reject) => {
     let success = true;  //error
     if(success) 
          resolve("Data loaded");
     else
          reject("error occurred ");
});
promise.then(result => console.log(result))
     .catch(error => console.error(error));

     //async and await allows us to write asynchronous code in a synchronous manner
async function getData() {
     let response = await fetch('https://jsonplaceholder.typicode.com/users');
     let data = await response.json();
     console.log(data);
}

fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
.then(data => console.log(data))  //then -> multiple then can be chained together to handle multiple asynchronous operations
.catch(error => console.error(error));  //catch ->  one time , always last, handles errors that occur in the promise chain

//error handling >> try block and catch block

try {
     var x=y+10;  //error
} catch (error) {
     console.error( error.message);
}

//local storage -> key value pair
//permanent storage in the browser ,data always in string format

localStorage.setItem('name', 'John');
                                          // on client side, 
//retrieving data from local storage
var name1= localStorage.getItem('name');
console.log(name1);

//removing data from local storage
localStorage.removeItem('name');

//store object in local storage
var user = {name: 'Alice',age: 30};
localStorage.setItem('user', JSON.stringify(user)); // JSON.stringify converts object to string before storing

//retrieving object from local storage
var user1 = JSON.parse(localStorage.getItem('user')); // JSON.parse converts string back to object

console.log(user1.name,user1.age);