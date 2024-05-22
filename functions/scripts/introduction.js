console.log("Inside Introduction to Functions")

function sayHello(){
    console.log("Hello Vodacon")
}

function getTodaysDate(){
    console.log("TOdays Date Function")
    const date='22-May-2024'
    return date
}

function addTwoNumbers(one,two){
    let result=one+two;
    console.log(`Addition of ${one} 
    and ${two} is ${result}`)
}

function squareMe(number){
    const square=number*number;
    return square;
}
//--------------------------------------------------------------------------------
sayHello()

const todaysDate=getTodaysDate()
console.log("Todays Date is:",todaysDate)
// console.log("Todays Date is: ",getTodaysDate())
// console.log("Some other thing about date ",getTodaysDate())
console.log("Some other thing about date ",todaysDate)

addTwoNumbers(20,30)

//Pass the number 12 to squareMe 
//function and print it's square
console.log("12 squared: ", squareMe(12));

