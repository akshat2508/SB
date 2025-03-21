
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

