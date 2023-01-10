// import userData from "./data.js";
const userData = require('./data');  
/* Totally Private Data Farm 

Good news, renown advertising firm Evil Corp. wants to purchase our 
private user data! 

We'd never do this in real life of course, but just for practice 
let's pretend we're unethical web hackers and transform the data 
in the way Evil Corp. has requested. They're quite particular and
just want an array of users with a fullname and human readable
birthday.   

Write a function that maps through the current data and returns
a new an array of objects with only two properties: 
fullName and birthday. Each result in your 
array should look like this when you're done: 

{
    fullName: "Levent Busser", 
    birthday: "Fri Aug 20 1971"
}

Read about toDateString() for info on formatting a readable date. 

*/
function transformData(data){
    return data.map(user => ({
            fullname: user.name.first + " " + user.name.last,
            birthday: new Date(user.dob.date).toDateString()
    }))
}

// or with destructuring as only need name and dob object
function transformData2(data){
    return data.map(({name, dob}) => ({
            fullname: name.first + " " + name.last,
            birthday: new Date(dob.date).toDateString()
    }))
}



console.log(transformData(userData));
console.log(transformData2(userData));
/* 
    [{fullname: "Levent Busser", birthday: "Sat Aug 21 1971"}, {fullname: "Kornelius Hamnes", birthday: "Sat Sep 23 1961"}, {fullname: "Ute Henry", birthday: "Sat Jun 30 1956"}, {fullname: "Estéfano Monteiro", birthday: "Mon Jul 16 1945"}, {fullname: "Oğuzhan Beşerler", birthday: "Sun Sep 28 1947"}, {fullname: "Susanna Burke", birthday: "Tue Jun 13 1961"}, {fullname: "Haritya Starickiy", birthday: "Fri Dec 14 1945"}, {fullname: "Nadja Branković", birthday: "Mon May 24 1993"}, {fullname: "Sonja Lenzen", birthday: "Wed Mar 21 1945"}, {fullname: "Shubhangi Chatterjee", birthday: "Tue Dec 25 1956"}]
*/
