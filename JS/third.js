// In-Built Objects and Array etc...

// -----------------------------------------------------------------------------

// ################   In-Built Objects ###############
// ################   refer to MDN resources ###############

// ---------------->  1. Math Object  <------------------
// to use Mathematical function , Math Object is used ;

// let a = Math.random()  // it will generate a random number
// let a = Math.round(3.456) // will round off to nearest int 
// let a = Math.abs(-232) 
// let a = Math.max(1,2,3,55,67,6)
// let a = Math.min(1,2,3,55,67,6)
// console.log(a)

// ---------------->  2. String  <------------------

// let lastName = new String("Ehtasham") // Object type
// console.log(typeof(lastName))

// let firstName = "Mohammad" // primitive type 
//  after applying . after string name JS treat it as a  object but not primitve 

// console.log(firstName.length) 
// console.log(firstName[0]) 
// console.log(firstName.includes("amma")) 
// console.log(firstName.startsWith("Moh")) 
// console.log(firstName.endsWith("mad"))
// console.log(firstName.indexOf("d"))
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.trim())
// console.log(firstName.replace(""))

// let message = 'This is my first git hub commit!!' // split the strings
// let words = message.split(' ') ;         // into object of diff words 
// console.log(words) ;


// ---------------->  3. Template Literal  <------------------

// let message = 'This is \n my first\n git hub commit!!'  // dificult 
// let message = 'This is my first git hub commit!!' 
// console.log(message)

// ' '," " , /  etc or any special char can't be used- in the strings  directly 

// let message = `This is 
// my first               
// git hub commit!!`   // print same as looking // using backtick
// console.log(message) 

// ---------------->  4. Date & Time  <------------------

// let date = new Date() ;
// let date = new Date('16 August 2003 07:24') ;
// let date = new Date(2003,0,29,14) ; 
// let date = new Date(2003,0,29,14) ; 
// using setter to set any value of method 
// date.setFullYear(2005)
// date.setMonth(5)
// date.setDate(20)
// date.setMinutes(30)
// console.log(date) 
// using getter to get any value 

//-----------------------------------------------------------------------------
// ################   Arrays  (Refrence type in JS)  ###############
//  Collection of different type of data 
//  What can we do with arrays ? 

// 1. Adding new Elements
// 2. Finding Elements
// 3. Removing Elements
// 4. Splitting Elements
// 5. Combining Elements

// let numbers = [10,20,30,40,50,60,70] 
// console.log(numbers) //all elements 
// console.log(numbers.length) // length of array 
// console.log(numbers[4])  // access each element 

// for (let ele in numbers) {
//     console.log(ele,numbers[ele]) ; // index and values at index
// }

//  Insertion in the array 
// 1. End  => numbers.push(ele) , 
// numbers.push(80) ; 

// 2. Begin => numbers.unshift(ele)  ,
// numbers.unshift(-10)

// 3. Middle => using splice 
// numbers.splice(2,0,'a','b','c' )
// console.log(numbers) 

// Searching in array 
// console.log(numbers.indexOf(40)); // 3
// console.log(numbers.indexOf(110));  // index = -1 if not present 

// check if present or not 
// if(numbers.indexOf(44) != -1) 
//     console.log("Present")
// else 
// console.log("Not Present")

// better way 
// console.log(numbers.includes(33)) ;
// console.log(numbers.indexOf(3,10)) ;

// doing same operations on refrences 
let courses = [
    {no:1, naam:"Ehtasham"} ,
    {no:2, naam:"Nazim"} ,
    {no:3, naam:"Sameer"} ,
    {no:4, naam:"Sarfaraz"} ,
]
// console.log(courses) ;

// console.log(courses.indexOf({no:1, naam:"Ehtasham"})) ; // O/P => -1 , coz these values of console is diff object and have not the same refrence value as the main 

// IN PRIMITIVE WE WERE COMPARING THE VALUES ONLY 
// IN OBJECTS WE COMPARED THE REFRENCES  , that's why 

//  here we use CALLBACK FUNCTION 



// console.log(courses) ;
// console.log(courses) ;