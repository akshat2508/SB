
// var a = prompt("What is your name");
// console.log(a);

// let age = 18;
// if(age>=18)
// {
//     console.log("You are an adult");
// }
// else{
//     console.log("You are not an adult");

// }



// let score = 90;
// if(score >= 90)
// {
//     console.log("Grade A");

// }
// else if (score>=80)
// {
//     console.log("Grade B");
// }
// else if (score >=70)
// {
//     console.log("Grade C");
// }
// else if (score>=60)
// {
//     console.log("Grade D");
// }
// else
// {
//     console.log("Fail");

// }




// let day = "Monday";
// switch(day)
// {
//     case "Monday":
//         console.log("Today is Monday");
//         break;
//     case "Tuesday":
//         console.log("Today is Tuesday");
//         break;
//     case "Wednesday":
//         console.log("Today is Wednesday");
//         break;
//     case "Thursday":
//         console.log("Today is Thursday");
//         break;
//     case "Friday":
//         console.log("Today  is Friday");
//         break;
//     case "Saturday":
//         console.log("Today is Saturday");
//         break;
//     case "Sunday":
//         console.log("Today is Sunday");
//         break;
//     default:
//         console.log("Invalid entry of day");
//         break;
// }




// let text  = " ";
// let i =0 ;
// while(i<10)
// {
//     text+="The number is "+ i+ "\n";
//     i++;
// }
// console.log(text);




// let text = " ";
// let i = 0;
// do{
//     text+="The number is "+ i + "\n";
//     i++;
// }while(i<10);
// console.log(text);

// confirm("Do you know that you are GAY ? press OK for Yes  or Cancel for Yes");


// alert("Hello world");
// let name1= prompt("Enter Your name");
// console.log(name1);
// let result  = confirm("Are you sure you want to delete this record? ");
// console.log(result);




// let car = {
//     name: "BMW",
//     model : "Xs",
//     color: "Black",
//     start: function()
//     {
//         console.log("Car started");
//     },

// };

// console.log(Object.keys(car));
// console.log(Object.values(car));



// car.start();


// for(let i in car)
// {
//     console.log(i +" = "+car[i]);
// }




// console.log(Math.random());
// console.log(Math.max(10 ,20,30,40,50));
//  let date = new Date();
//  console.log("date: "+ date);


///// FUNCTION HAS FORMAL PARAMETER AND WHAT WE PASS IS CALLED ACTUAL PARAMETER

function greet(name)
{
    return "hello "+name;
}
console.log(greet('Akshat'));


//ARROW FUNCTION => it is a shorter syntax for writing function expression 

let greet1 = (name) => 
    console.log("Hello "+name);
greet1("John");

const greet2 = function(name)
{
    return "Hello "+name;
}

console.log(greet2("JOHN"));


//IIFE => IMMEDIATELY INVOKDE FUCNTION EXPRESSION

(function ()
{
    console.log("Hello world");
})();


//CALLBACK FUNCTION => A FUNCTION PASSED AS AN ARGUEMENT TO ANOTHER FUCNTION 
function greet3(greet2)
{
    console.log("Hello "+greet2);
}

greet3("harsh");


let fruits = ["Apple" , "Mango" ,"Orange"];
console.log(fruits);

let numbers = new Array(1,2,3,4,5);
console.log(numbers);

//INDEXING => accessing array elements
console.log(fruits[0]);

console.log(fruits[10]);


console.log(fruits.push("Grapes"));
console.log(fruits.pop());
console.log(fruits.shift());
console.log(fruits.unshift("Apple"));
//SPLICE()=> add or remove an element from a specific index

let fruits2 = ["Apple", "Banana", "Mango", "Orange"];
fruits2.splice(1,1,"Grapes");
console.log(fruits2);//["Apple", "GRapes" ,"Mango" ,"Orange"]


//NON -MUTATING ARRAY METHODS ->  IT DOES NOT CHANGE THE ORIGINAL ARRAY 
// Map()=> it creates a new array by calling a funciton on each element of the input array
let numbers1 = [1,2,3,4,5];
let result1 = numbers1.map((num)=> num*2);
// let result2 = numbers1.map(function(num)
// {
//     return num*2;
// })
//((num)=> num*2)
console.log(result1);//ouput: [2,4,6,8.10];
// console.log(result2);



//filter() =>  it creates a new array with elements that pass the test of the function 
let result2 = numbers1.filter(function(num)
{
    return num > 2;
});
console.log(result2);//output: [3,4,5]

//reduce() => It applies a function to each element fo the array to reduce it to a sin
let result3 = numbers1.reduce(function(accumulator, num){
    return accumulator+num;
},0);
console.log(result3);//output 15/
//Same thing but different
let result_3= numbers1.reduce((acc,num)=>acc+num);
console.log(result_3);


//find() =>  it returns the first element that passes the test of the function
let result4 = numbers1.find((num) => num >2);
console.log(result4);


//findindex()=>it returns the index of the element;
let result5 =  numbers1.findIndex((num)=> num>2);
console.log(result5);

//some() =>  it returns true if at least one element passes the test of the function 
let result6 = numbers1.some((num) => num>2);
console.log(result6);


//every() =>  it returns true of all elements pass the test of the function 
let result7 = numbers1.every((num) =>  num > 2);
console.log(result7);


//sort()=> it sorts the elements of an array
let numbers2  = [1,4,2,5,2];
let result8 = numbers2.sort((a,b)=> a-b);
console.log(result8);

let result9= numbers2.sort((a,b)=> b-a);
console.log(result9);


//join() =>  it joins all elements of an array into a string
let result10  = numbers1.join("-");
console.log(result10);


//split() => it splits string into an array 
let text2= "hello wrold";
let result11 = text2.split(" ");
console.log(result11);

//reverse() => reversing an array
let result12 = numbers2.reverse();
console.log(result12);

//concat() =>  it merges two or more arrays
let arr2 = [1,2,3];
let arr3 = [4,5,6];
let result13 = arr2.concat(arr3);
console.log(result13);//output:[1,2,3,4,5,6]
